import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SkipPreviousRounded } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
    displayFlexCenter: {
        display: "flex",
        justifyContent: "center",
    },
    containerBlocks:{
        marginTop:50,
        marginLeft:20,
        [theme.breakpoints.down('md')]: {
         marginLeft:0,
         flexBasis:"0%",
          },
    },
    firstBlock:{
        boxShadow: "7px 10px 5px 2px rgba(169,164,164,0.75)",
        width:"80%",
        flexBasis:"50%",
       margin:"0 auto",
        textAlign: "justify",
        padding: 25,
         marginBottom: 35,
         fontFamily:'Josefin Sans',
         color:"#505050",
        [theme.breakpoints.up('md')]: {
           width:"70%",
             }
    },
    borderBlock: {
        boxShadow: "7px 10px 5px 2px rgba(169,164,164,0.75)",
        width:"80%",
       margin:"0 auto",
        textAlign: "justify",
        padding: 25,
         marginBottom: 35,
         fontFamily:'Josefin Sans',
         color:"#505050",
         [theme.breakpoints.down('md')]: {
            width:"70%",
             },
        
    },
    titleBlocks :{
        textAlign: "center",
        fontStyle:"italic"
    },
    displayStructCouple :{
    display:"flex",
    justifyContent:"space-around",
    }, 
    lineText :{
  
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
    animatedItem3: {
        animation: `$myEffect 6000ms ${theme.transitions.easing.easeInOut}`
    },
       

}))

export default function AboutBlocks({ generalInfo, ausbildung, preise, einzelaustellung, gruppenaustellung, projekte }) {
    const classes = useStyles();

    return (<Grid container spacing={1} className={classes.containerBlocks} >
        <Grid item xs={12} spacing={3} style={{textAlign: "center"}} className={` ${classes.animatedItem} ${classes.firstBlock}`}>
            <h3>{generalInfo.name}</h3>
            <h4>{generalInfo.address}</h4>
            <h4>{generalInfo.website}</h4>
            <h4>{generalInfo.email}</h4>
        </Grid>

        <Grid container className={classes.animatedItem2}>
            <Grid container className={classes.displayStructCouple}>
            <Grid item xs={12} md={6} spacing={1}  className={classes.borderBlock}>
                <h3 className={classes.titleBlocks}>{ausbildung.title}</h3>
                {ausbildung.texts.map(a => {
                    return <p className={classes.lineText}>{a.text}</p>
                })}
            </Grid>
            <Grid xs={12} md={6} item className={classes.borderBlock}>
                <h3 className={classes.titleBlocks}>{preise.title}</h3>
                {preise.texts.map(a => {
                    return <p className={classes.lineText}>{a.text}</p>
                })}
            </Grid>
            </Grid>
            <Grid container className={`${classes.displayStructCouple} ${classes.animatedItem3}`}>
            <Grid xs={12} sm={6} item className={classes.borderBlock}>
                <h3 className={classes.titleBlocks}>{einzelaustellung.title}</h3>
                {einzelaustellung.texts.map(a => {
                    return <p className={classes.lineText}>{a.text}</p>
                })}
            </Grid>
            <Grid xs={12} sm={6} item className={classes.borderBlock}>
                <h3 className={classes.titleBlocks}>{gruppenaustellung.title}</h3>
                {gruppenaustellung.texts.map(a => {
                    return <p className={classes.lineText}>{a.text}</p>
                })}
            </Grid>
            </Grid>
            <Grid xs={12} md={6} item style={{textAlign:"center"}} className={classes.borderBlock}>
                <h3 className={classes.titleBlocks}>{projekte.title}</h3>
                {projekte.texts.map(a => {
                    return <p  className={classes.lineText}>{a.text}</p>
                })}
            </Grid>
        </Grid>
    </Grid>
    )
}