import React, { useContext } from "react";
import { AppContext } from "../GlobalContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { sepettekiler } = useContext(AppContext);
  const { favoriler } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LUNARSE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ne yemek istersin?"
              />
              <button className="btn btn-outline-success" type="submit">
                Ara
              </button>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  className="nav-link"
                  to="/favorite"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`favorite/`)}
                >
                  Favoriler({favoriler.length})
                </button>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link"
                  to="/sepet"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`sepet/`)}
                >
                  Sepet ({sepettekiler.length})
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
