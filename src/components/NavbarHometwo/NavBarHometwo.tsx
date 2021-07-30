import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import "./NavBarHometwo.css"


function NavbarHometwo() {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

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
    const drawerWidth = {
        position: "fixed",
        '@media (minWidth: 780px)': {
            display: "none",
        }
    }

    return (
        <div style={{ position: "fixed" }} >

            <MenuIcon style={{ display: "inline-block" }} onClick={onClick} />
            <nav
                ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}
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
                            <Link to='/hometwo' className="navbar-item" style={{ fontSize: 40, width: 200, marginLeft: 15 }}>Franziska Harnisch</Link>
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                            <Link className="navbar-item" to="/workdetails">
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

export default NavbarHometwo;
