import React from "react";
import "./Header.scss";
import schoolLogo from "../../assets/image/school_logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky-top">
      <nav className="container-fluid navbar">
        <div className="row w-100">
          <div className="col-3">
            <img src={schoolLogo} alt="school-logo" className="nav-img" />
          </div>

          <div className="col-6 justify-content-center m-auto">
            <ul className="nav-text d-flex flex-row list-unstyled justify-content-around mb-0">
              <li>
                <Link to="/viewTeachers" className="nav-link-text">View Teachers</Link>
              </li>
              <li><Link to="/viewContracts" className="nav-link-text">View Contracts</Link></li>
              <li><Link to="/viewSalary" className="nav-link-text">View Salary</Link></li>
            </ul>
          </div>

          <div className="col-3 m-auto d-flex justify-content-end">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-search my-2 my-sm-0"
                type="submit"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
