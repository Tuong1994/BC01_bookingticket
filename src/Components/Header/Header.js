import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { taiKhoan } = useSelector((state) => state.NguoiDungReducer);

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink
            activeStyle={{ fontWeight: "bold" }}
            activeClassName="bg-dark text-light"
            className="navbar-brand"
            to="/"
          >
            CYBERSOFT
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/contact"
                >
                  Link
                </NavLink>
              </li>
              <li className="nav-item">
                {taiKhoan !== "" ? (
                  <span className="nav-link">{taiKhoan}</span>
                ) : (
                  <NavLink
                    activeStyle={{ fontWeight: "bold" }}
                    activeClassName="bg-dark text-light"
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="bg-dark text-light"
                  className="nav-link"
                  to="/lifecycle"
                >
                  Lifecycle
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink class="dropdown-item" to="/usestatedemo">
                    Use State Hook
                  </NavLink>
                  <NavLink class="dropdown-item" to="/useeffectdemo">
                    Use Effect Home
                  </NavLink>
                  <NavLink class="dropdown-item" to="/reduxhook">
                    Redux Hook
                  </NavLink>
                  <NavLink class="dropdown-item" to="/chonmauxe">
                    Chọn màu xe
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
