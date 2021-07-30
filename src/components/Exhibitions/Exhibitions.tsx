import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  greyColor: {
    color: grey[600],
  },
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
  },
  upWidth: {
    width: '400px',
  },
}));

export default function Exhibitions({ upcomingExhibitions, exhibitions }) {
  const classes = useStyles();
  console.log(upcomingExhibitions, exhibitions);
  return (
    <>
      <Box className={classes.flexColumn}>
        {upcomingExhibitions.length > 0 && (
          <Typography variant="h3" className={classes.greyColor}>
            Upcomings
          </Typography>
        )}
        <Box className={classes.flexWrap}>
          {upcomingExhibitions.length > 0 &&
            upcomingExhibitions.map((u) => (
              <Box className={classes.upWidth}>
                <Typography varaint="h6">{u.name}</Typography>
                {u.date && (
                  <Typography variant="body2">{u.date.slice(0, 10)}</Typography>
                )}
              </Box>
            ))}
        </Box>
      </Box>
      <Box className={classes.flexColumn}>
        {exhibitions.length > 0 && (
          <Typography variant="h3" className={classes.greyColor}>
            History of Exhibitions
          </Typography>
        )}
      </Box>
    </>
  );
}
