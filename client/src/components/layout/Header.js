import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
const Header = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    try {
      setAuth({
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Event Registration App 
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li> */}
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </Link>
                    <ul className="dropdown-menu p-2 w-25">
                      <li className="nav-item">
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="nav-link"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/login"
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
