import React, { useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import { Grid } from '@material-ui/core';
import './EventsFrontPage.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavBarContext } from '../../context/NavbarContext';

const useStyles = makeStyles((theme) => ({
  animatedText: {
    animation: `$textAppear 2000ms ${theme.transitions.easing.easeInOut}`,
    fontFamily: 'Josefin Sans',
    fontSize: 25,
    maxWidth: 350,
    margin: 10,
    paddingLeft: 50,
    [theme.breakpoints.down(960)]:{
      fontSize:20,
      paddingLeft:5,
      maxWidth:250
      },
  
      [theme.breakpoints.down("sm")]:{
        fontSize:18,
        paddingLeft:5,
        maxWidth:250
        },
  },

  '@keyframes textAppear': {
    '0%': {
      opacity: 0,
      transform: ' translateY(-200%)',
    },
    '100%': {
      opacity: 1,
      transform: ' translateY(0)',
    },
  },
  displayflexCont: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    marginRight: 'auto',
  },

  fontSizeTitle: {
    fontSize: 30,
    width:"fit-content",
    fontFamily: "'Josefin Sans', sans-serif",
    [theme.breakpoints.only("md")]:{
      fontSize:23,
      },
      [theme.breakpoints.down("sm")]:{
        fontSize:15,
        },
  },
  columnDir: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
    width:"80%",
    },
  },
  textEvent: {
    position: 'relative',
    left: '60%',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      left: '10%',
     
    },
    [theme.breakpoints.down('sm')]: {
      left: '10%',
      width:300,
 
    },

    margin: 0,
    maxWidth: 500,
  },
}));

export default function EventsFrontPage({ events }) {
  const classes = useStyles();
  const { negZIndex } = useContext(NavBarContext);

  return (
 <Grid container className={classes.displayflexCont}>
      <Grid item xs={12} md={6} className={classes.columnDir}>
        {negZIndex ? (
          <h3
            className={`${classes.textEvent} ${classes.fontSizeTitle}`}
            style={{ zIndex: '-1000' }}
          >
            {events.comingTitle}
          </h3>
        ) : (
          <h3 className={`${classes.textEvent} ${classes.fontSizeTitle}`}>
            {events.comingTitle}
          </h3>
        )}

        <p className={classes.animatedText}>{events.futureEvent}</p>
      </Grid>
      <Grid item xs={12} md={6} className={classes.columnDir}>
        {negZIndex ? (
          <h3
            className={`${classes.textEvent} ${classes.fontSizeTitle}`}
            style={{ zIndex: '-1000' }}
          >
            {events.lastTitle}
          </h3>
        ) : (
          <h3 className={`${classes.textEvent} ${classes.fontSizeTitle}`}>
            {events.lastTitle}
          </h3>
        )}

        <p className={classes.animatedText}>{events.lastEvent}</p>
      </Grid>
    </Grid>  
  );
}
