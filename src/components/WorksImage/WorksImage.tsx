import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import {
  HashtagContext,
  HashtagProvider,
} from '../../Context/HashtagContext.tsx';

const useStyles = makeStyles(() => ({
  image: {
    opacity: '1',
    display: 'block',
    width: '100%',
    height: 'auto',
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
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
  },
  content: {
    backgroundColor: grey[600],
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    padding: '16px 32px',
    marginBottom: '3px',
  },
  hashTags: {
    backgroundColor: grey[600],
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    padding: '5px 10px',
  },
}));

const WorksImage = ({ imageInfo }) => {
  const classes = useStyles();
  const imageStyle = { borderRadius: '2px' };
  const { alt = '', childImageSharp, image, text } = imageInfo;
  const { hashtag, setHashtag } = useContext(HashtagContext);

  // const getHashtag = (h) => {
  //   setHashtag(h);
  //   console.log(hashtag);
  // };

  if (!!image && !!image.childImageSharp) {
    return (
      <HashtagProvider>
        <div className={classes.container}>
          <Img
            style={imageStyle}
            fluid={image.childImageSharp.fluid}
            alt={alt}
            className={classes.image}
          />
          <div className={classes.middle}>
            <div className={classes.content}>{text}</div>
            {imageInfo.blurbs ? (
              <div className={classes.hashTags}>
                {imageInfo.blurbs
                  .map((i) => i.text)
                  .map((h) => (
                    <Button key={h} onClick={() => setHashtag(h)}>
                      <Typography variant="body2">#{h}</Typography>
                    </Button>
                  ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </HashtagProvider>
    );
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

WorksImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default WorksImage;
