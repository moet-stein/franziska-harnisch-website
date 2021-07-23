import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby";
import ListIcon from '@material-ui/icons/List';
import "./NavBarHometwo.css"


function NavbarHometwo() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);



    return (
        <nav

            className="positionNavbar fontJos"
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
    );

};

export default NavbarHometwo;
