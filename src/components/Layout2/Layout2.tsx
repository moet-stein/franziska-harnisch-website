import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import LayImg from '../LayImg/LayImg';
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
  h1Fontsize: {
    fontSize: '60px',
    color: blueGrey[700],
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
  marginPic: {
    marginLeft: theme.spacing(4),
  },
  descWidth: {
    width: '70%',
  },
  '@media only screen and (max-width: 600px)': {
    marginPic: {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function Layout2({ workdetailsData }) {
  const classes = useStyles();
  const {
    description,
    title,
    subTitle,
    links,
    layoutType,
    hashtags,
    images,
    featuredimage,
    excerpt,
    content,
    contentComponent,
  } = workdetailsData;

  const PostContent = contentComponent || Content;

  return (
    <>
      <Box className={classes.flexColumn} mt={5}>
        <Box className={classes.flexColumn}>
          <Typography className={classes.h1Fontsize} variant="h1">
            {title}
          </Typography>
          <Box className={classes.width60}>
            <Typography variant="h6">{subTitle}</Typography>
          </Box>
          {hashtags.length > 0 && (
            <Box className={classes.flexWrap} m={3}>
              {hashtags.map((h, index) => (
                <Box ml={2} key={`${h}-${index}`}>
                  <Typography className={classes.hashColor}>
                    #{h.hashtag}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box className={classes.flexWrap}>
          {images.map((i, index) => (
            <Box key={`image-${index}`} className={classes.marginPic}>
              <LayImg img={i} />
            </Box>
          ))}
        </Box>
        <Box m={5} className={classes.flexColumn}>
          {/* <Typography className={classes.descWidth} variant="body2">
            {excerpt && excerpt}
          </Typography> */}
          {content && (
            <Box className={classes.descWidth}>
              <PostContent content={content} />
            </Box>
          )}
          <Box className={classes.links}>
            {links.length > 0 &&
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
          <RelatedImgs />
        </Box>
      </Box>
    </>
  );
}
