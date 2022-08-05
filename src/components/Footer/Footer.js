import React from "react";
import "../Footer/Footer.scss";
import schoolLogo from "../../assets/image/school_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-bg row">
        <div className="col-3 d-flex align-items-center">
          <img src={schoolLogo} alt="school-logo" className="footer-img"/>
        </div>

        <div className="footer-text col-6 d-flex flex-column align-items-center">
          <p>Teacher Payment System</p>
          <p>
            Automate payment operations so you can focus on teacher
            relationships and growing values.
          </p>
        </div>

        <div className="col-3 d-flex justify-content-center">
          <ul className="list-unstyled  m-auto">
            <li >
              <Link className="footer-text" to="/">Policy</Link>
            </li>
            <li >
              <Link className="footer-text" to="/">Policy</Link>
            </li>
            <li >
              <Link className="footer-text" to="/">Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
