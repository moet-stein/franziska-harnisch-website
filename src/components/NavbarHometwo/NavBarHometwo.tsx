import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import SelectLanguage from '../SelectLanguage.tsx';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { pages } from '../../data/pages.json';
import { FormattedMessage } from 'react-intl';
import './NavBarHometwo.css';

const useStyles = makeStyles((theme) => ({
  test:{
    color: "red",
    [theme.breakpoints.up("sm")]: {
     color:"blue",
    }},
    fontJos :{
      fontFamily: 'Josefin Sans',
      color: 'black',
    },
    
    directionNavbar: {
      display: "flex",
      flexDirection: "column",
      padding: 15,
      background: "#c5c4c4",
      width: 200,
      height: "100vh",
      boxShadow: "0 1px 8px rgba(0, 0, 0, 0.3)",
      zIndex: 100,
      paddingTop:50,
    },
    navbarItem: {
      margin: 15,
      color:"black",
      fontSize: 20,
     
    },
  linkselected:{
      textDecoration:"underline",
    }
  
}))

function NavbarHometwo({ langs, url, langKey }) {
  const classes = useStyles();
  const dropdownRef = useRef(null);
 
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log('pages', pages);
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

  
  const homeLink = langKey === 'en' ? `/${langKey}/` : '/';
  const impressumLink = langKey === 'en' ? `/${langKey}/impressum`  : '/impressum'
 const impressumText = langKey === 'en' ? "Imprint"  : "Impressum"
 const datenschutzLink = langKey === 'en' ? `/${langKey}/datenschutzverordnung`  : '/datenschutzverordnung'
 const datenschutzText = langKey === 'en' ? "Date protection regulation"  : "Datenschutzverordnung"
 
  return (
    <div style={{ position: 'fixed', top: 15 }}>
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
            <div className={classes.directionNavbar}>
            <Button to={homeLink} component={Link} style={{textTransform:"capitalize", fontWeight:"bold", fontSize:20}}>
                      Franziska Harnisch
                    </Button>
                    
              {pages.map((page) => {
                console.log(page);
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
                          {`/${langKey}/${page.to}` === url ? (
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
          
               <Button to={impressumLink} component={Link} style={{textTransform:"capitalize"}}>
              {impressumText}
            </Button>
            <Button to={datenschutzLink} component={Link} style={{textTransform:"capitalize"}}>
              {datenschutzText}
            </Button>
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
