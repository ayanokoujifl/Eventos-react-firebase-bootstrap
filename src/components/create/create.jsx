import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./create.css";
import { firebase } from "../../config/firebase";

export function Create() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState(0);

  const cadastrar = () => {
    setCarregando(1);
    firebase.automaticDataCollectionEnabled;
    setMsgTipo(null);
    if (!email || !senha) {
      setMsgTipo("erro");
      setMsg("Você precisa preencher os campos");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setCarregando(0);
        setMsgTipo("sucesso");
        setMsg("Usuário cadastrado com sucesso");
      })
      .catch((err) => {
        setCarregando(0);
        console.log(err);
        setMsgTipo("erro");
        switch (err) {
          case "Password should be at least 6 characters":
            setMsg("A senha precisa ter pelo menos 6 caracteres");
            break;
          case "The email address is already in use by another account":
            setMsg("Este email já pertence a outra conta");
            break;
          case "FirebaseError: Firebase: Error (auth/invalid-email).":
            setMsg("Este email é inválido");
            break;
          default:
            setMsg("Não foi possível concluir o cadastro");
            break;
        }
      });
  };

  return (
    <>
      <div className="form-cadastro">
        <form action="" className="text-center form-login mx-auto mt-5">
          <h1 className="h3 mb-3 fw-bold">Cadastro</h1>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control my-2"
            placeholder="Senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />

          {carregando ? (
            <div className="spinner-border mt-3 loading" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
              onClick={cadastrar}
            >
              Cadastrar
            </button>
          )}
          <div className="msg-login text-black text-center my-4">
            {msgTipo === "sucesso" && (
              <span>
                <strong>Perfeito!</strong> {msg}
              </span>
            )}
            {msgTipo === "erro" && (
              <span>
                <strong>Ops!</strong> {msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
