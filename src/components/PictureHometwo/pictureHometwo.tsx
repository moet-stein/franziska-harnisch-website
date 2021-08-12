import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import PreviewCompatibleImage from '../DisplayPictureAdapter/DisplayPictureAdapter';

const useStyles = makeStyles(theme => ({
    imageMask: {
        opacity: 0.5
    },
    imageNoMask: {
        opacity: 1
    },
    animatedItem: {
        animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`
    },
    animatedItemExiting: {
        animation: `$myEffectExit 2000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,

    },
    "@keyframes myEffect": {
        "0%": {
            opacity: 0,

        },
        "100%": {
            opacity: 1,

        }
    },
    "@keyframes myEffectExit": {
        "0%": {
            opacity: 1,

        },
        "100%": {
            opacity: 0,

        }
    }
}));
const textWidth = {
    position: "relative",
    maxWidth: 240,
    textAlign: "justify"
}
export default function PictureHometwo({ pic }) {
    console.log("pic", pic[0].image)
    useEffect(() => {
        setExit(false)
    }, [])
    const classes = useStyles();
    const [visible, setVisible] = useState(false)
    const [exit, setExit] = useState(false);
    const [thirdPic, setThirdPic] = useState(false)

    return (<Grid container style={{ width: "100%" }} >
        <Grid item xs={12} sm={4} style={{ paddingLeft: 30, display:"flex", flexDirection:"column-reverse" }}  >
            {/*  <PreviewCompatibleImage imageInfo={pic[0].image} style={{ borderRadius: 5, }} onMouseOver={() => setExit(prev => !prev)} className={exit ? classes.imageMask : classes.imageNoMask} image={pic[0].image} fluid={pic[0].image.childImageSharp.fluid.src} /> */}
            <img style={{ borderRadius: 5, width:"80%" }} onMouseOver={() => setExit(prev => !prev)} className={exit ? classes.imageMask : classes.imageNoMask} src={typeof pic[0].image === 'string' ? pic[0].image : pic[0].image} />
            <p className={exit ? classes.animatedItem : classes.animatedItemExiting}
                style={textWidth} >{pic[0].text}</p>
        </Grid>
        <Grid item xs={12} sm={4} >  {/*             <PreviewCompatibleImage imageInfo={pic[2].image} style={{ borderRadius: 5 }} onMouseOver={() => setVisible(prev => !prev)} className={visible ? classes.imageMask : classes.imageNoMask} image={pic[2].image} fluid={pic[2].image.childImageSharp.fluid.src} /> */}
            <img style={{ borderRadius: 5 }} onMouseOver={() => setVisible(prev => !prev)} className={visible ? classes.imageMask : classes.imageNoMask} src={typeof pic[1].image === 'string' ? pic[1].image : pic[1].image} />
            <p style={textWidth} className={visible ? classes.animatedItem : classes.animatedItemExiting}>{pic[1].text}</p></Grid>
        <Grid item xs={12} sm={4}  >
            {/*             <PreviewCompatibleImage imageInfo={pic[1].image} style={{ borderRadius: 5 }} onMouseOver={() => setThirdPic(prev => !prev)} className={thirdPic ? classes.imageMask : classes.imageNoMask} image={pic[1].image} fluid={pic[1].image.childImageSharp.fluid.src} /> */}
            <img style={{ borderRadius: 5 }} onMouseOver={() => setThirdPic(prev => !prev)} className={thirdPic ? classes.imageMask : classes.imageNoMask} src={typeof pic[2].image === 'string' ? pic[2].image : pic[2].image} />
            <p style={textWidth} className={thirdPic ? classes.animatedItem : classes.animatedItemExiting}>{pic[2].text}</p>

        </Grid>
        <Grid item xs={12} sm={4} ></Grid>
        <Grid item xs={12} sm={4}  >
            {/*             <PreviewCompatibleImage imageInfo={pic[2].image} style={{ borderRadius: 5 }} onMouseOver={() => setVisible(prev => !prev)} className={visible ? classes.imageMask : classes.imageNoMask} image={pic[2].image} fluid={pic[2].image.childImageSharp.fluid.src} /> */}
            <img style={{ borderRadius: 5 }} onMouseOver={() => setVisible(prev => !prev)} className={visible ? classes.imageMask : classes.imageNoMask} src={typeof pic[1].image === 'string' ? pic[1].image : pic[1].image} />
            <p style={textWidth} className={visible ? classes.animatedItem : classes.animatedItemExiting}>{pic[1].text}</p>

        </Grid>
        <Grid item xs={12} sm={4} ></Grid>


    </Grid >)
}