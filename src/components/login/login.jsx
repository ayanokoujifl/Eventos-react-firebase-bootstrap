import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./login.css";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setMsgTipo("sucesso");
      })
      .catch(() => {
        setMsgTipo("erro");
      });
  }

  return (
    <>
      <div className="login-content d-flex align-items-center">
        <form className="form-signin mx-auto">
          <img
            className="mb-4"
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal text-white fw-bold text-center">
            Sign In Please
          </h1>

          <input
            type="email"
            className="form-control my-2"
            id="floatingInput"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            className="form-control my-2"
            id="floatingPassword"
            placeholder="Senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />

          <button
            className="w-100 btn btn-lg btn-login mt-3"
            type="button"
            onClick={logar}
          >
            Sign in
          </button>

          <div className="msg-login text-white text-center my-4">
            {msgTipo === "sucesso" && (
              <span>
                <strong>WoW!</strong> Você está conectado
              </span>
            )}
            {msgTipo === "erro" && (
              <span>
                <strong>Ops!</strong> Verifique se a senha ou usuários estão
                corretos
              </span>
            )}
          </div>

          <div className="opcoes-login mt-5">
            <a className="mt-3 mb-3  text-center">Recuperar Senha</a>
            <span className="mt-3 mb-3  text-center text-white">&#9885;</span>
            <Link className="mt-3 mb-3 text-center" to="create">
              Cadastrar agora
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
