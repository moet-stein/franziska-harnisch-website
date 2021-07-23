import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import ListIcon from '@material-ui/icons/List';
import "./NavBarHomeStyle.css"
//import github from "../img/github-icon.svg";
//import logo from "../img/logo.svg";

function NavbarHome() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  /* constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };
 */
  // render() {
  return (
    <nav

      className="posFixed navdimensions nav-container"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="dispFlexRow dfspacearound navMenu">
        <div className="navbar-brand">

          {/* Hamburger menu */}
          {/*  <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div> */}
        </div>
        <div
          id="navMenu"
        // className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="dispflexrow dfspacearound"  >
            <Link className="navbar-item" to="/hometwo">
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
            <div className="menu-container" style={{ display: "inline-block" }}>
              <p onClick={onClick} className="menu-trigger navbar-item" >
                <ListIcon />

              </p>
            </div>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
              <ul>

                <li><a href="">Impressum</a></li>
                <li><a href="">Datenschutz</a></li>
              </ul>
            </nav>
          </div>

          <div className="navbar-end has-text-centered">
            {/*   <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <span className="icon">
                  <img src={github} alt="Github" />
                </span> 
              </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
  // }
};

export default NavbarHome;
