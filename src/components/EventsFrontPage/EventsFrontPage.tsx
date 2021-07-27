import React from "react"
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import "./EventsFrontPage.css"
import { makeStyles } from "@material-ui/core/styles";

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
    width: "fit-content",
    marginRight: "auto",

  },
  columnDir: {
    display: "flex",
    flexDirection: "column"
  }
}));




export default function EventsFrontPage({ events }) {
  const classes = useStyles();

  return (<div className={classes.displayflexCont}>
    <div className={classes.columnDir}>
      <h3 className="textEvent fontSizeTitle">{events.comingTitle}</h3>
      <p className={classes.animatedText}>{events.futureEvent}</p>
    </div>
    <div className={classes.columnDir}>
      <h3 className="textEvent fontSizeTitle">{events.lastTitle}</h3>
      <p className={classes.animatedText}>{events.lastEvent}</p>
    </div>

  </div>)
}