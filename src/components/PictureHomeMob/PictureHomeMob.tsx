import React, { useState, useEffect, useContext } from 'react';
import { Grid, Card, Link } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PreviewCompatibleImage from '../DisplayPictureAdapter/DisplayPictureAdapter';
import { NavBarContext } from '../../context/NavbarContext';


const useStyles = makeStyles((theme) => ({

  animatedItem: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 2000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
 externalContainer:{
  width: '95%',
   margin: '0 auto',
  
   [theme.breakpoints.down("md")]:{
    display:"flex",
    flexWrap: "wrap",
     justifyContent:"center",
     width:"90%",
     margin:"0 auto"
    
   },
 },
  gridItemLay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin:"10px 15px 15px 10px",
    maxWidth: "30%",
    [theme.breakpoints.down("md")]:{
      maxWidth:"50%",
    
     flexBasis:"0%"
    }
  },
}));

const textWidth = {
  position: 'relative',
 width: 240,
  textAlign: 'justify',
  padding:5,
};

const negTextWidth = {
  position: 'relative',
  width: 240,
  padding:5,
  textAlign: 'justify',
  zIndex: '-1000',
};

export default function PictureHomeMob({ pic }) {
  console.log('pic', pic[0].image);
  const [newArray, setNewArray] = useState([]);
  useEffect(() => {
    window.onscroll = () => {
        setExit(true);
        setVisible(true);
        setThirdPic(true);
      }
  }, []);
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const [exit, setExit] = useState(false);
  const [thirdPic, setThirdPic] = useState(false);
  const { negZIndex } = useContext(NavBarContext);

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

  useEffect(() => {
    setNewArray(shuffle(pic));
    console.log(newArray);
  }, []);

  console.log('pic', newArray);
  if (newArray.length > 0) {
    return (
      <Grid container className={classes.externalContainer}>
      <Grid item xs={12} sm={6} md={4} className={classes.gridItemLay}>
        
        {negZIndex ? (
          <img
            style={{ borderRadius: 5, width: 240, height:200, zIndex: '-1000' }}
            onMouseOver={() => setExit((prev) => !prev)}
         
            src={newArray[0].image}
          />
        ) : (
          <Link href={newArray[0].link}>
          <img
            style={{ borderRadius: 5, width: 240, height:200, boxShadow: "5px 5px 12px 2px #828282" }}
            onMouseOver={() => setExit((prev) => !prev)}
         
            src={newArray[0].image}
          />
          </Link>
        )}
        {negZIndex ? (
          <p
            className={
              exit ? classes.animatedItem : classes.animatedItemExiting
            }
            style={negTextWidth}
          >
            {newArray[0].text}
          </p>
        ) : (
          <p
            className={
              exit ? classes.animatedItem : classes.animatedItemExiting
            }
            style={textWidth}
          >
            {newArray[0].text}
          </p>
        )}
       
      </Grid>

      <Grid item xs={12} sm={6} md={4} className={classes.gridItemLay}>
        
        {negZIndex ? (
                    <img
            style={{ borderRadius: 5, width: 240, height:200, zIndex: '-1000' }}
            onMouseOver={() => setVisible((prev) => !prev)}
            
            src={newArray[1].image}
            
          />
         
        ) : (
          <Link href={newArray[1].link}>
          <img
            style={{ borderRadius: 5, width: 240, height:200, boxShadow: "5px 5px 12px 2px #828282" }}
            onMouseOver={() => setVisible((prev) => !prev)}
            
            src={newArray[1].image}
          />
          </Link>
        )}
        {negZIndex ? (
          <p
            style={negTextWidth}
            className={
              visible ? classes.animatedItem : classes.animatedItemExiting
            }
          >
            {newArray[1].text}
          </p>
        ) : (
          <p
            style={textWidth}
            className={
              visible ? classes.animatedItem : classes.animatedItemExiting
            }
          >
            {newArray[1].text}
          </p>
        )}
      
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.gridItemLay}>
        
        {negZIndex ? (
         
          <img
            style={{ borderRadius: 5, width: 240, height:200, zIndex: '-1000' }}
            onMouseOver={() => setThirdPic((prev) => !prev)}
            
            src={newArray[2].image}
          />
        
        ) : (
          <Link href={newArray[1].link}>
          <img
            style={{ borderRadius: 5, width: 240, height:200, boxShadow: "5px 5px 12px 2px #828282"}}
            onMouseOver={() => setThirdPic((prev) => !prev)}
           
            src={newArray[2].image}
          />
         </Link>
        )}
        {negZIndex ? (
       
          <p
            style={negTextWidth}
            className={
              thirdPic ? classes.animatedItem : classes.animatedItemExiting
            }
          >
            {newArray[2].text}
          </p>
          
        ) : (
         
          <p
            style={textWidth}
            className={
              thirdPic ? classes.animatedItem : classes.animatedItemExiting
            }
          >
            {newArray[2].text}
          </p>
          
        )}
      
      </Grid>
    </Grid>
  );
} else {
  return <p></p>;
}
}