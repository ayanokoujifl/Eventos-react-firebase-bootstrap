import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../../assets/EVENTOS.png";
import { useDispatch, useSelector } from "react-redux";

export function Nav() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className="navbar-brand" src={Logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {useSelector((state) => state.usuarioLogado) > 0 ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Publicar Evento
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Meus eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => {
                        dispatch({ type: "LOG_OUT", usuarioEmail: email });
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : null}

              {useSelector((state) => state.usuarioLogado) > 0 ? null : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/create">
                      Cadastrar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
