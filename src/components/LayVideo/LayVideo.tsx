import React from 'react';
import ReactPlayer from 'react-player';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imgWidth: {
    width: '400px',
    cursor: 'pointer',
    transition: 'box-shadow .3s',
    borderRadius: '3px',
    '&:hover': {
      boxShadow: '0 0 20px rgba(5,5,5,.5)',
    },
  },
  '@media only screen and (max-width: 600px)': {
    imgWidth: {
      width: '300px',
      height: 'auto',
    },
  },
}));

export default function LayImg({ video }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {video && (
        <Box className={classes.imgWidth} m={3}>
          <ReactPlayer controls="true" width="100%" url={video.videoURL} />
        </Box>
      )}
    </React.Fragment>
  );
}
