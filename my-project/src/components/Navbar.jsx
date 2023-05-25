import React, { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand me-20" href="/">
          Logo
        </a>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <CustomLink
              href="/home"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Home
            </CustomLink>
            <CustomLink
              href="/about"
              className="nav-link"
              onClick={handleLinkClick}
            >
              About
            </CustomLink>
            <CustomLink
              href="/contact"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Contact
            </CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const isActive = window.location.pathname === href;

  return (
    <li className={isActive ? "nav-item active" : "nav-item"}>
      <a href={href} className={props.className} {...props}>
        {children}
      </a>
    </li>
  );
}
