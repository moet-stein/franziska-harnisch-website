import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
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

export default function WorkDeTemplate({ workdetailsData }) {
  const classes = useStyles();
  const [ftImg, setFtImg] = useState({});

  useEffect(() => {
    const ftObj = {
      imageTitle: title,
      image: featuredimage,
    };
    console.log(ftObj);
    setFtImg(ftObj);
  }, []);

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
  return (
    <Box className={classes.flexColumn}>
      <Box className={classes.flexColumn} mt={5}>
        {title && (
          <Typography className={classes.h1Fontsize} variant="h1">
            {title}
          </Typography>
        )}
        {subTitle && <Typography variant="h6">{subTitle}</Typography>}
      </Box>
    </Box>
  );
}
