import React, { useState } from "react";
import UpdateTheme from "./UpdateTheme";
import logo from "../assets/home/Logo.png";
const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className={`navbar ${props.fixed ? "fixed" : ""}`}>
      <div style={{ marginLeft: "20px", display: "flex" }}>
        <a className="logo" href="/">
          <img src={logo} width="70" />
        </a>

        <UpdateTheme />
      </div>
      <div className="links">
        <a href="/#features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About Us</a>
      </div>
      <div className="phoneMenu" onClick={() => setClicked(!clicked)}>
        <div style={{ fontSize: 90 }}>&equiv;</div>
        {clicked ? (
          <div className="phone-links">
            <a href="/#features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About Us</a>
            <a href="/videos">Videos</a>
            <a href="/articles">Articles</a>
            <a href="/classes">Classes</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
export default Navbar;
