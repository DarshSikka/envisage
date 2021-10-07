import React from "react";

const Navbar = (props) => {
  return (
    <nav className={`navbar ${props.fixed ? "fixed" : ""}`}>
      <div class="logo">Logo</div>
      <div class="links">
        <a href="/#features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About Us</a>
        <a href="/videos">Videos</a>
        <a href="/articles">Articles</a>
        <a href="/classes">Classes</a>
      </div>
    </nav>
  );
};
export default Navbar;
