import { useState } from "react";
import { Nav } from "../navbar/nav";
import "./recover.css";
import "firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export function Recover() {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  function recuperarSenha() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMsg(
          "Link para redefinição de senha enviado para o email correspondente"
        );
      })
      .catch((err) => {
        setMsg("Email inválido");
      });
  }

  return (
    <>
      <Nav />
      <div className="container-form-recover mx-auto">
        <form className="text-center form-recover mt-5">
          <h3 className="mb-3 fw-bold">Recuperar senha</h3>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="msg my-4 text-center">
            <span>{msg}</span>
          </div>
          <button
            onClick={recuperarSenha}
            type="button"
            className="btn btn-lg btn-block btn-submit"
          >
            Confirmar
          </button>
        </form>
      </div>
    </>
  );
}
