import React from 'react'

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img 
          id="header-img"
          src={require("../images/talkingtiff_650.png")}
          alt="talking with tiff logo"
          />
      </div>
      <nav id="nav-bar">
        <ul>
          <li><a className="nav-link" href="#signup">sign up</a></li>
          <li><a className="nav-link" href="#choose">why tiff</a></li>
          <li><a className="nav-link" href="#about">about tiff</a></li>
          <li><a className="nav-link" href="#prices">pricing</a></li>
          <li>
            <a className="nav-link-icon" href="#">
              <i className="material-icons-round">shopping_cart</i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;