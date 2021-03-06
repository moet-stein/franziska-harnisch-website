import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import SelectLanguage from '../SelectLanguage.tsx';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { pages } from '../../data/pages.json';
import { FormattedMessage } from 'react-intl';

import './NavBarHometwo.css';
import { NavBarContext } from '../../context/NavbarContext';

const useStyles = makeStyles((theme) => ({
  navbarLarge: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  navbarMob: {
    display: 'none',
    [theme.breakpoints.down('lg')]: {
      display: 'block',
    },
  },
  nameMob: {
    display: 'none',
    [theme.breakpoints.only('md')]: {
      display: 'block',
      position: 'absolute',
      width: 300,
      top: 10,
      left: '50%',
      marginLeft: 70,
      marginTop: 0,
      color: 'grey',
      fontFamily: 'Josefin Sans',
      fontWeight: 700,
      fontSize: 25,
      padding: 2,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'absolute',
      width: 300,
      top: 10,
      left: '0%',
      marginLeft: 70,
      marginTop: 0,
      color: 'grey',
      fontFamily: 'Josefin Sans',
      fontWeight: 700,
      fontSize: 18,
      padding: 2,
    },
    [theme.breakpoints.down(360)]:{
      width:250,
      fontSize:18,
    }
  },
  fontJos: {
    fontFamily: 'Josefin Sans',
    color: 'black',
  },
  nameHomeLink: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  directionNavbar: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    background: '#ededed',
    width: 200,
    height: '100vh',
    boxShadow: '0 1px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 100,
    paddingTop: 30,
  },
  navbarItem: {
    margin: 15,
    color: 'black',
    fontSize: 20,
  },
  linkselected: {
    textDecoration: 'underline',
  },
}));

function NavbarHometwo({ langs, url, langKey }) {
  const classes = useStyles();
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const { negZIndex, setNegZIndex } = useContext(NavBarContext);

  const onClick = () => {
    setIsActive(!isActive);
    negZIndex ? setNegZIndex(false) : setNegZIndex(true);
    console.log(negZIndex);
  };

  //style

  const positionNavbar = {
    position: 'relative',
    top: 0,
    left: 0,
    height: '100vh',
    fontFamily: 'Josefin Sans',
    color: 'black',
  };

  const homeLink = langKey === 'en' ? `/${langKey}/` : '/';
  const impressumLink =
    langKey === 'en' ? `/${langKey}/impressum` : '/impressum';
  const impressumText = langKey === 'en' ? 'Imprint' : 'Impressum';
  const datenschutzLink =
    langKey === 'en'
      ? `/${langKey}/datenschutzverordnung`
      : '/datenschutzverordnung';
  const datenschutzText =
    langKey === 'en' ? 'Date protection regulation' : 'Datenschutzverordnung';

  return (
    <div>
         <Button
              to={homeLink}
              component={Link}
              className={classes.nameMob}
            >
              Franziska Harnisch
            </Button>
      <div style={{ position: 'fixed', top: 15 }} className={classes.navbarMob}>
        <MenuIcon style={{ display: 'inline-block' }} onClick={onClick} />

        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
          style={positionNavbar}
          role="navigation"
          aria-label="main-navigation"
        >
          <div className={classes.directionNavbar}>
            <Button
              to={homeLink}
              component={Link}
              className={classes.nameHomeLink}
            >
              Franziska Harnisch
            </Button>

            {pages.map((page) => {
              return (
                <React.Fragment>
                  <FormattedMessage id={page.to}>
                    {(txt) => (
                      <Button
                        className={`${classes.fontJos}`}
                        id={page.to}
                        component={Link}
                        to={
                          langKey !== 'de'
                            ? `/${langKey}/${page.to}`
                            : `/${page.to}`
                        }
                      >
                        {`/${langKey}/${page.to}` === url || `/${page.to}`=== url ? (
                          <span className={classes.linkselected}>{txt}</span>
                        
                        ) : (
                       
                          txt
                        
                        )}
                      </Button>
                       
                       
                       
                    )}
                  </FormattedMessage>
                  
                </React.Fragment>
              );
            })}

            <SelectLanguage langs={langs} />
          </div>
        </nav>
      </div>
      {/*   Normal menu*/}
      <div
        style={{ position: 'fixed', top: 15 }}
        className={classes.navbarLarge}
      >
        <nav
          style={positionNavbar}
          role="navigation"
          aria-label="main-navigation"
        >
          <div className={classes.directionNavbar}>
            <Button
              to={homeLink}
              component={Link}
              className={classes.nameHomeLink}
            >
              Franziska Harnisch
            </Button>

            {pages.map((page) => {
              return (
                <React.Fragment>
                  <FormattedMessage id={page.to}>
                    {(txt) => (
                      <Button
                        className={`${classes.fontJos}`}
                        id={page.to}
                        component={Link}
                        to={
                          langKey !== 'de'
                            ? `/${langKey}/${page.to}`
                            : `/${page.to}`
                        }
                      >
                        {`/${langKey}/${page.to}` === url ||  `/${page.to}` === url ? (
                          <span className={classes.linkselected}>{txt}</span>
                        ) : (
                          txt
                        )}
                      </Button>
                    )}
                  </FormattedMessage>
        
                </React.Fragment>
              );
            })}

            <SelectLanguage langs={langs} />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarHometwo;
{
  /*  <Link to='/' className="navbar-item" style={{ fontSize: 40, width: 200, marginLeft: 15 }}>Franziska Harnisch</Link>
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
                            <Link className="smallLink " to="/">Datenschutz</Link> */
}
