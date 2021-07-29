import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import LayImg from '../LayImg/LayImg';
import RelatedImgs from '../RelatedImgs/RelatedImgs';

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
  topPart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function Layout1({ workdetailsData }) {
  const classes = useStyles();
  const [ftImg, setFtImg] = useState({});
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
    const ftObj = {
      imageTitle: title,
      image: featuredimage,
    };
    console.log(ftObj);
    setFtImg(ftObj);
  }, []);

  return (
    <>
      <Box className={classes.flexColumn}>
        <Box className={classes.flexColumn} mt={5}>
          <Typography className={classes.h1Fontsize} variant="h1">
            {title}
          </Typography>
          <Typography variant="h6">{subTitle}</Typography>
          {hashtags.length > 0 && (
            <Box className={classes.flexWrap}>
              {hashtags.map((h, index) => (
                <Box key={`${h}-${index}`} ml={2}>
                  <Typography className={classes.hashColor}>
                    #{h.hashtag}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box className={classes.topPart}>
          <Box>
            <Box>
              <LayImg img={ftImg} />
              {/* <img
                className={classes.imgWidth}
                src={featuredimage.childImageSharp.fluid.src}
              /> */}
            </Box>
          </Box>
          <Box className={classes.flexColumn}>
            <Box className={classes.imgWidth} mt={6} ml={6}>
              <Typography variant="body2">{description}</Typography>
            </Box>
            <Box className={classes.links}>
              {links.length > 0 &&
                links.map((l, index) => (
                  <Box key={`${l.linkName}-${index}`} ml={2}>
                    <Link href={l.linkURL}>
                      <Typography>{l.linkName}</Typography>
                    </Link>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>

        <Box className={classes.flexWrap} mt={4}>
          {images.map((i, index) => (
            <LayImg key={index} img={i} />
          ))}
        </Box>

        <Box>
          <RelatedImgs />
        </Box>
      </Box>
    </>
  );
}
