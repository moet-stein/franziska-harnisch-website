import React from 'react';
import ReactPlayer from 'react-player';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imgWidth: {
    width: '400px',
    cursor: 'pointer',
    transition: 'box-shadow .3s',
    marginLeft: '30px',
    borderRadius: '3px',
    '&:hover': {
      boxShadow: '0 0 20px rgba(5,5,5,.5)',
    },
  },
  player: {
    height: 'auto',
  },
  '@media only screen and (max-width: 600px)': {
    imgWidth: {
      width: '300px',
      height: 'auto',
    },
    player: {
      height: '100%',
    },
  },
}));

export default function LayImg({ video }) {
  const classes = useStyles();
  console.log(video);

  return (
    <React.Fragment>
      {video && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className={classes.imgWidth} m={3}>
            <ReactPlayer
              className={classes.player}
              controls="true"
              width="100%"
              url={video.videoURL}
            />
          </Box>
          <Box>
            <Typography variant="body2">{video.videoTitle}</Typography>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
}
