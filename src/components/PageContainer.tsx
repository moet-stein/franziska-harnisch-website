import React, { useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    marginContainer:{
     marginTop:80,
     marginBottom:"15vh",
     width:"100%",
     zIndex:-10,
     [theme.breakpoints.up("lg")]: {
        marginLeft:"230px",
       },
       [theme.breakpoints.only('lg')]:{
         width:"80%",
       }

    }
  
    
  }))

function PageContainer(props) {
    const classes = useStyles();
  useEffect(() => {
    document.title = `${props.title}`;
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={classes.marginContainer}>{props.children}</div>
    </>
  );
}
export default PageContainer;