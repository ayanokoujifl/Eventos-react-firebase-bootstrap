import { useState } from "react";

import "./login.css";

function logar() {
  alert("vamos logar");
}

export function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

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
          <h1 className="h3 mb-3 fw-normal text-white fw-bold">
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
            <span>
              <strong>WoW!</strong> Você está conectado
            </span>
            <span>
              <strong>Ops!</strong> Verifique se a senha ou usuários estão
              corretos
            </span>
          </div>

          <div className="opcoes-login mt-5">
            <a className="mt-3 mb-3  text-center">Recuperar Senha</a>
            <span className="mt-3 mb-3  text-center text-white">&#9885;</span>
            <a className="mt-3 mb-3 text-center">Cadastrar agora</a>
          </div>
        </form>
      </div>
    </>
  );
}
