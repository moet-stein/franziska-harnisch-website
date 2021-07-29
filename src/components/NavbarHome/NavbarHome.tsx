import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import "../NavbarHometwo/NavBarHometwo.css"


function NavbarHome() {


  //style
  const positionNavbar = {
    position: "relative",
    top: 0,
    left: 0,
    height: "100vh",
    fontFamily: "Josefin Sans",
    color: "black",
  }
  const fontJos = {
    fontFamily: "Josefin Sans",
    color: "black",
  }


  return (
    <div style={{ position: "fixed" }} >


      <nav

        style={positionNavbar}

        role="navigation"
        aria-label="main-navigation"
      >
        <div className="">
          <div className="navbar-brand">


          </div>
          <div
            id=""

          >
            <div className="directionNavbar"  >
              <p style={{ fontSize: 40, width: 200, marginLeft: 15 }}>Franziska Harnisch</p>
              <Link className="navbar-item" to="/lauraTest">
                About
              </Link>
              <Link className="navbar-item" to="/testMoe">
                Works
              </Link>
              <Link className="navbar-item" to="/">
                Exibitions
              </Link>
              <Link className="navbar-item" to="/">
                Contact
              </Link>
              <Link className="navbar-item" to="/">
                Links
              </Link>
              <Link className="smallLink " to="/">Impressum</Link>
              <Link className="smallLink " to="/">Datenschutz</Link>

            </div>

          </div>
        </div>
      </nav>
    </div >
  );

};

export default NavbarHome;

