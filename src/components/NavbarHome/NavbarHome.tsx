import React from "react";
import { Link } from "gatsby";
import "./NavBarHomeStyle.css"
//import github from "../img/github-icon.svg";
//import logo from "../img/logo.svg";

const NavbarHome = class extends React.Component {
  constructor(props) {
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

  render() {
    return (
      <nav
            className="posFixed navdimensions"
            role="navigation"
        aria-label="main-navigation"
      >
        <div className="dispFlexRow dfspacearound">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
             <h1>Franziska Harnisch</h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="dispflexrow dfspacearound" style={{alignItems:"center"}}>
              <Link className="navbar-item" to="/about">
             About
              </Link>
              <Link className="navbar-item" to="/products">
              Works
              </Link>
              <Link className="navbar-item" to="/blog">
             Exibitions
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Links
              </Link>
              <Link className="navbar-item" to="/register">
                Impressum
              </Link>
              
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
  }
};

export default NavbarHome;
