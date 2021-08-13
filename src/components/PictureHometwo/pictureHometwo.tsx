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
    const [newArray, setNewArray] = useState([])
    useEffect(() => {
        setExit(false)
    }, [])
    const classes = useStyles();
    const [visible, setVisible] = useState(false)
    const [exit, setExit] = useState(false);
    const [thirdPic, setThirdPic] = useState(false)

    const shuffle = (array) => {
        var currentIndex = array.length,
          randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
        return array;
      };

useEffect(()=>{
 setNewArray(shuffle(pic))
 console.log(newArray)
},[])

console.log("pic", newArray)
if(newArray.length >0){
return(
   <Grid container style={{ width: "100%" }} >
     <Grid item xs={12} sm={4} style={{ paddingLeft: 30}}  >
          
            <img style={{ borderRadius: 5, width:240 }} onMouseOver={() => setExit(prev => !prev)} className={exit ? classes.imageMask : classes.imageNoMask} src={ newArray[0].image} />
            <p className={exit ? classes.animatedItem : classes.animatedItemExiting}
                style={textWidth} >{newArray[0].text}</p>
        </Grid>
        <Grid item xs={12} sm={4} > 
            <img style={{ borderRadius: 5, width:240 }} onMouseOver={() => setVisible(prev => !prev)} className={visible ? classes.imageMask : classes.imageNoMask} src={ newArray[1].image } />
            <p style={textWidth} className={visible ? classes.animatedItem : classes.animatedItemExiting}>{newArray[1].text}</p></Grid>
        <Grid item xs={12} sm={4}  >
        
            <img style={{ borderRadius: 5, width:240 }} onMouseOver={() => setThirdPic(prev => !prev)} className={thirdPic ? classes.imageMask : classes.imageNoMask} src={ newArray[2].image } />
            <p style={textWidth} className={thirdPic ? classes.animatedItem : classes.animatedItemExiting}>{newArray[2].text}</p>

        </Grid>



    </Grid >)}else{return <p></p>}
}