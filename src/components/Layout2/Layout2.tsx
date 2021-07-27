import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import LayImg from '../LayImg/LayImg';

const useStyles = makeStyles((theme) => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  h1Fontsize: {
    fontSize: '60px',
  },
  imgWidth: {
    width: '300px',
    borderRadius: '3px',
  },
  width60: {
    width: '60%',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '300px',
    marginTop: theme.spacing(3),
  },
  hashColor: {
    color: blueGrey[600],
  },
  '@media only screen and (max-width: 600px)': {
    topPart: {
      flexDirection: 'column',
    },
  },
}));

export default function Layout2({ workdetailsData }) {
  const classes = useStyles();
  const [imagesArr, setImagesArr] = useState([]);
  const {
    description,
    title,
    subTitle,
    links,
    layoutType,
    hashtags,
    images,
    featuredimage,
  } = workdetailsData;

  useEffect(() => {
    // const ftImage = {}
    // setImagesArr.push()
  }, []);

  return (
    <>
      <Box className={classes.flexColumn} mt={5}>
        <Box className={classes.flexColumn}>
          <Typography className={classes.h1Fontsize} variant="h1">
            {title}
          </Typography>
          <Typography className={classes.width60} variant="h6">
            {subTitle}
          </Typography>
          {hashtags.length > 0 && (
            <Box className={classes.flexWrap} m={3}>
              {hashtags.map((h) => (
                <Box ml={2}>
                  <Typography className={classes.hashColor}>
                    #{h.hashtag}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box className={classes.flexWrap}>
          <img
            className={classes.imgWidth}
            src={featuredimage.childImageSharp.fluid.src}
          />
          {images.map((i, index) => (
            <LayImg key={index} img={i} />
          ))}
        </Box>
      </Box>
    </>
  );
}
