import React from "react"
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import { Grid } from '@material-ui/core'
import "./EventsFrontPage.css"
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

  animatedText: {
    animation: `$textAppear 2000ms ${theme.transitions.easing.easeInOut}`,
    fontFamily: 'Josefin Sans',
    fontSize: 25,
    maxWidth: 350,
    margin: 10,
    paddingLeft: 50,

  },

  "@keyframes textAppear": {
    "0%": {
      opacity: 0,
      transform: " translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: " translateY(0)",


    }
  },
  displayflexCont: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 30,
    marginBottom: 30,
    width: "100%",
    marginRight: "auto",

  },
  fontSizeEvent : {
    fontSize: 25,
    fontWeight: 400,
    fontFamily: "'Josefin Sans', sans-serif",
  
  },
  fontSizeTitle : {
    fontSize: 30,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  columnDir: {
    display: "flex",
    flexDirection: "column"
  },
  textEvent: {
    position: "relative",
    left: "60%",
    display: "inline-block",
    [theme.breakpoints.down('md')]:{
      left:"0%",
    },
  
    margin: 0,
    maxWidth: 500,
  }

}));




export default function EventsFrontPage({ events }) {
  const classes = useStyles();

  return (<Grid container className={classes.displayflexCont}>
    <Grid item xs={12} md={6}  className={classes.columnDir}>
      <h3 className={`${classes.textEvent} ${classes.fontSizeTitle}`}>{events.comingTitle}</h3>
      <p className={classes.animatedText}>{events.futureEvent}</p>
    </Grid>
    <Grid item xs={12} md={6} className={classes.columnDir}>
      <h3 className={`${classes.textEvent} ${classes.fontSizeTitle}`}>{events.lastTitle}</h3>
      <p className={classes.animatedText}>{events.lastEvent}</p>
    </Grid>

  </Grid>)
}