import React from "react";

function Header() {
  return (
    <header>
      <nav className="container">
        {/* Nama Cici mili sebagai logo */}
        <span className="logo">Emily Portfolio.</span>

        <i id="btn-menu" className="fa-solid fa-bars" />

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#Portfolio">Portfolio</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
