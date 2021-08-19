import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import LayImg from '../LayImg/LayImg';
import LayVideo from '../LayVideo/LayVideo';
import RelatedImgs from '../RelatedImgs/RelatedImgs';
import Content, { HTMLContent } from '../Content';

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
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  flexWrap2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  h1Fontsize: {
    fontSize: '60px',
    color: blueGrey[700],
  },
  imgWidth: {
    width: '300px',
    borderRadius: '3px',
  },
  width60: {
    width: '90%',
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
  marginPic: {
    // marginLeft: theme.spacing(4),
    width: '400px',
  },
  marginV: {
    // marginLeft: theme.spacing(4),
    margin: '30px',
    width: '400px',
  },
  descWidth: {
    width: '70%',
  },
  '@media only screen and (max-width: 650px)': {
    descWidth: {
      width: '350px',
      margin: '5px',
    },
    h1Fontsize: {
      fontSize: '40px',
    },
  },
}));

export default function Layout2({ workdetailsData, location }) {
  const classes = useStyles();
  const {
    title,
    subTitle,
    links,
    hashtags,
    images,
    youtubeVideos,
    content,
    contentComponent,
    titleToShow,
  } = workdetailsData;

  const PostContent = contentComponent || Content;

  return (
    <>
      <Box className={classes.flexColumn} mt={5}>
        <Box className={classes.flexColumn}>
          <Typography
            align="center"
            className={classes.h1Fontsize}
            variant="h1"
          >
            {titleToShow}
          </Typography>
          <Box className={classes.width60}>
            <Typography align="center" variant="h6">
              {subTitle}
            </Typography>
          </Box>
          {/* {hashtags && hashtags.length > 0 && (
            <Box className={classes.flexWrap} m={3}>
              {hashtags.map((h, index) => (
                <Box ml={2} key={`${h}-${index}`}>
                  <Typography className={classes.hashColor}>
                    #{h.hashtag}
                  </Typography>
                </Box>
              ))}
            </Box>
          )} */}
        </Box>
        <Box className={classes.flexWrap}>
          {images &&
            images.length > 0 &&
            images.map((i, index) => (
              <Box key={`image-${index}`} className={classes.marginPic}>
                <LayImg img={i} />
              </Box>
            ))}
        </Box>
        <Box className={classes.flexWrap2}>
          {youtubeVideos &&
            youtubeVideos.length > 0 &&
            youtubeVideos.map((v, index) => (
              <Box key={`video-${index}`} className={classes.marginV}>
                <LayVideo video={v} />
              </Box>
            ))}
        </Box>
        <Box m={5} className={classes.flexColumn}>
          {content && (
            <Box className={classes.descWidth}>
              <PostContent content={content} />
            </Box>
          )}
          <Box className={classes.links}>
            {links &&
              links.length > 0 &&
              links.map((l, index) => (
                <Box ml={2} key={`${l.linkName}-${index}`}>
                  <Link href={l.linkURL}>
                    <Typography>{l.linkName}</Typography>
                  </Link>
                </Box>
              ))}
          </Box>
        </Box>
        <Box>
          <RelatedImgs location={location} />
        </Box>
      </Box>
    </>
  );
}
