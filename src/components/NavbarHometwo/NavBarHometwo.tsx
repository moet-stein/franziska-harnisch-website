import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import SelectLanguage from '../SelectLanguage.tsx';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { pages } from '../../data/pages.json';
import { FormattedMessage } from 'react-intl';
import './NavBarHometwo.css';

function NavbarHometwo({ langs, url, langKey }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log("pages", pages);
  console.log(langKey);

  //style
  const positionNavbar = {
    position: 'relative',
    top: 0,
    left: 0,
    height: '100vh',
    fontFamily: 'Josefin Sans',
    color: 'black',
  };
  const fontJos = {
    fontFamily: 'Josefin Sans',
    color: 'black',
  };
  const drawerWidth = {
    position: 'fixed',
    '@media (minWidth: 780px)': {
      display: 'none',
    },
  };
  const homeLink = langKey === 'en' ? '/' : `/${langKey}/`;
  return (
    <div style={{ position: 'fixed' }}>
      <MenuIcon style={{ display: 'inline-block' }} onClick={onClick} />
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
        style={positionNavbar}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="">
          <div className="navbar-brand"></div>
          <div id="">
            <div className="directionNavbar">
              {pages.map((page) => (
                <React.Fragment>
                  <FormattedMessage id={page.to}>
                    {(txt) => (
                      <Button
                        id={page.to}
                        component={Link}
                        to={
                          langKey !== 'de'
                            ? `/${langKey}/${page.to}`
                            : `/${page.to}`
                        }
                        // className={classes.button}
                        className="navbar-item"
                      >
                        {`/${langKey}/${page.to}` === url ? (
                          <span>{txt}</span>
                        ) : (
                          txt
                        )}
                      </Button>
                    )}
                  </FormattedMessage>
                </React.Fragment>
              ))}
              {/*  <Link to='/' className="navbar-item" style={{ fontSize: 40, width: 200, marginLeft: 15 }}>Franziska Harnisch</Link>
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                            <Link className="navbar-item" to="/workdetails">
                                Works
                            </Link>
                            <Link className="navbar-item" to="/exhibitions">
                                Exhibitions
                            </Link>
                            <Link className="navbar-item" to="/contactPage">
                                Contact
                            </Link>
                            <Link className="navbar-item" to="/links">
                                Links
                            </Link>
                            <Link className="smallLink " to="/">Impressum</Link>
                            <Link className="smallLink " to="/">Datenschutz</Link> */}
              <SelectLanguage langs={langs} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHometwo;
