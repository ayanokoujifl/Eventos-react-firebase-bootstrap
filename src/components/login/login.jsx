import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import Logo from "../../assets/EVENTOS.png";

export function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logar() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setMsgTipo("sucesso");
        setTimeout(() => {
          dispatch({ type: "LOG_IN", usuarioEmail: email });
        }, 2000);
      })
      .catch(() => {
        setMsgTipo("erro");
      });
  }

  return (
    <>
      <div className="login-content d-flex align-items-center">
        {useSelector((state) => state.usuarioLogado) > 0
          ? (() => navigate("/"))()
          : null}
        <form className="form-signin mx-auto">
          <img src={Logo} alt="" className="logo" />
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

          <div className="opcoes-login mt-1 ">
            <Link to="/recover" className="mt-2 mb-2  text-center">
              Recuperar Senha
            </Link>
            <span className="mt-2 mb-2  text-center text-white">&#9885;</span>
            <Link className="mt-2 mb-2 text-center" to="/create">
              Cadastrar agora
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
