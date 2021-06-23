// Module imports
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Asset imports
import logo from 'assets/images/logo.png';

/**
 * Header component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Header />
 */
export default function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="40"
              className="d-inline-block align-text-center me-2"
            />
            <span className="fs-3 fw-bold">gomycode</span>
          </Link>
          <div
            className="collapse navbar-collapse navbar-collapse--custom"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#posts">
                  Posts
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
