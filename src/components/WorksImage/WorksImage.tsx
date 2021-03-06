import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import { useLocation } from '@reach/router';

const useStyles = makeStyles(() => ({
  root: {
    width: '240px',
    display: 'inline-block',
  },
  widthImg: {
    width: '180px',
  },

  image: {
    opacity: '1',
    display: 'block',
    width: '100%',
    height: 'auto',
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
    borderRadius: '5px',
  },
  middle: {
    transition: '.5s ease',
    opacity: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  container: {
    position: 'relative',
    '&:hover $image': { opacity: '0.3' },
    '&:hover $middle': { opacity: '1' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: grey[600],
    opacity: '0.9',
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    padding: '16px 32px',
    marginBottom: '3px',
  },
  hashTags: {
    backgroundColor: grey[300],
    opacity: '0.8',
    borderRadius: '5px',
    width: '200px',
  },
  '@media only screen and (max-width: 600px)': {
    root: {
      width: '150px',
    },
    widthImg: {
      width: '150px',
    },
  },
}));

const WorksImage = ({ imageInfo, title, slug }) => {
  const classes = useStyles();
  const location = useLocation().pathname;

  return (
    <div
      className={classes.root}
      // style={{
      //   width: '240px',
      //   display: 'inline-block',
      // }}
    >
      {!!imageInfo && (
        <Link className="title has-text-primary is-size-4" to={slug}>
          {location === '/workdetails' && (
            <div className={classes.container}>
              <img src={imageInfo} className={classes.image} />
              <div className={classes.middle}>
                <div className={classes.content}>{title}</div>
              </div>
            </div>
          )}
          {location !== '/workdetails' && (
            <Box className={classes.widthImg}>
              <div className={classes.container}>
                <img src={imageInfo} className={classes.image} />
                <div className={classes.middle}>
                  <div className={classes.content}>{title}</div>
                </div>
              </div>
            </Box>
          )}
        </Link>
      )}
    </div>
  );
  // }
};

WorksImage.propTypes = {
  imageInfo: PropTypes.string,
};

export default WorksImage;
