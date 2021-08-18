import React, { useEffect, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavBarContext } from '../context/NavbarContext';

const useStyles = makeStyles((theme) => ({
  marginContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginTop: 80,
    marginBottom: '15vh',
    width: '100%',
    zIndex: -10,
    [theme.breakpoints.up('lg')]: {
      marginLeft: '230px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '80%',
    },
  },
  marginContainer2: {
    marginTop: 80,
    marginBottom: '15vh',
    width: '100%',
    zIndex: -10,
    [theme.breakpoints.up('lg')]: {
      marginLeft: '230px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '80%',
    },
  },
}));

function PageContainer(props) {
  const classes = useStyles();
  const { negZIndex } = useContext(NavBarContext);

  // useEffect(() => {
  //   document.title = `${props.title}`;
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      {negZIndex ? (
        <div className={classes.marginContainer}>{props.children}</div>
      ) : (
        <div className={classes.marginContainer2}>{props.children}</div>
      )}
    </>
  );
}
export default PageContainer;
