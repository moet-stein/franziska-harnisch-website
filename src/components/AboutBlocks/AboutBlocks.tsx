import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { SkipPreviousRounded } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
    displayFlexCenter: {
        display: "flex",
        justifyContent: "center",
    },
    borderBlock: {
        border: "1px solid black",
        maxWidth: "fit-content",
        textAlign: "center",
        padding: 15,
        margin: 3,
        
    },
    animatedItem: {
        animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`
    },
        "@keyframes myEffect": {
        "0%": {
            opacity: 0,

        },
        "100%": {
            opacity: 1,

        }
    },
    animatedItem2: {
        animation: `$myEffect 4000ms ${theme.transitions.easing.easeInOut}`
    },
       

}))

export default function AboutBlocks({ generalInfo, ausbildung, preise, einzelaustellung, gruppenaustellung, projekte }) {
    const classes = useStyles();

    return (<Grid container spacing={1} className={classes.displayFlexCenter} >
        <Grid item xs={12} spacing={3} className={`${classes.borderBlock} ${classes.animatedItem}`}>
            <h3>{generalInfo.name}</h3>
            <h4>{generalInfo.address}</h4>
            <h4>{generalInfo.website}</h4>
            <h4>{generalInfo.email}</h4>
        </Grid>

        <Grid container className={classes.animatedItem2}>
            <Grid item xs={12} sm={6} spacing={3}  className={classes.borderBlock}>
                <h3>{ausbildung.title}</h3>
                {ausbildung.texts.map(a => {
                    return <p>{a.text}</p>
                })}
            </Grid>
            <Grid xs={12} sm={6} item className={classes.borderBlock}>
                <h3>{preise.title}</h3>
                {preise.texts.map(a => {
                    return <p>{a.text}</p>
                })}
            </Grid>
            <Grid xs={12} sm={6} item className={classes.borderBlock}>
                <h3>{einzelaustellung.title}</h3>
                {einzelaustellung.texts.map(a => {
                    return <p>{a.text}</p>
                })}
            </Grid>
            <Grid xs={12} sm={6} item className={classes.borderBlock}>
                <h3>{gruppenaustellung.title}</h3>
                {gruppenaustellung.texts.map(a => {
                    return <p>{a.text}</p>
                })}
            </Grid>
            <Grid xs={12} sm={6} item className={classes.borderBlock}>
                <h3>{projekte.title}</h3>
                {projekte.texts.map(a => {
                    return <p>{a.text}</p>
                })}
            </Grid>
        </Grid>
    </Grid>
    )
}