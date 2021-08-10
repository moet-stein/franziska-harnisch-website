import React from 'react'
import { Link } from 'gatsby'

import { makeStyles, useTheme } from '@material-ui/core/styles';

import instagram from '../img/social/instagram.svg'
const useStyles = makeStyles((theme) => ({
  instagramLink:{
    display:"flex",
    justifyContent: "center",
    alignItems:"center"
  },
  footerContainer:{
    marginTop:50,
    background: "white",
    width:"100%",
    height:"10vh", 
    position:"fixed",
   bottom:0,
    display:"flex",
    justifyContent:"center",
    borderTop: "1px solid grey",
    paddingTop:"10px"

  }
}))

export default function Footer() {
  const classes = useStyles();
  
    return (
      <footer className={classes.footerContainer}>
      
       
            <div style={{ maxWidth: '100vw' }} className="columns">
             
              
              <div className={classes.instagramLink}>
               
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              
              </div>
              <div className={classes.instagramLink}>
                <p>| Copyrights - Franziska Harnisch |</p>
              </div>
            </div>
          
      </footer>
    )
  
}


