import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-dark text-white ps-3 py-3 pe-5 p-3 vh-100">
      <div>
        <span className="text-white text-decoration-none p-3">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="fs-3">Sidebar</span>
        </span>

        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <Link to="/">
            <li
              className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(1)}
            >
              <span className="text-white text-decoration-none text-white p-1">
                <i className="bi bi-speedometer2 me-3 fs-4"></i>
                <span>Dashboard</span>
              </span>
            </li>
          </Link>

          <Link to="/loggers">
            <li
              className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(2)}
            >
              <span className="text-white text-decoration-none text-white p-1">
                <i className="bi bi-people me-3 fs-4"></i>
                <span>loggers</span>
              </span>
            </li>
          </Link>

          <Link to="/orders">
            <li
              className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(3)}
            >
              <span className="text-white text-decoration-none text-white p-1">
                <i className="bi bi-table me-3 fs-4"></i>
                <span>Orders</span>
              </span>
            </li>
          </Link>

          <Link to="/form">
            <li
              className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
              onClick={(e) => setActive(4)}
            >
              <span className="text-white text-decoration-none text-white p-1">
                <i className="bi bi-book me-3 fs-4"></i>
                <span>Form</span>
              </span>
            </li>
          </Link>

          <li
            className={active === 5 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(5)}
          >
            <span className="text-white text-decoration-none text-white p-1">
              <i className="bi bi-grid me-3 fs-4"></i>
              <span>Report</span>
            </span>
          </li>
        </ul>
      </div>

      <div>
        <hr className="text-white" />
        <div className="nav-item p-2">
          <span className="text-white text-decoration-none p-1">
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span>
              <strong className="fs-4">It's Me</strong>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
