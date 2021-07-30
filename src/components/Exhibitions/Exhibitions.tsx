import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWidth: {
    width: '150px',
    borderRadius: '5px',
  },
}));

export default function Exhibitions({ upcomingExhibitions, exhibitions }) {
  const classes = useStyles();
  const [upcomingDate, setUpcomingDate] = useState('');
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
                <Box>
                  <Typography varaint="h6">{u.name}</Typography>
                  <Box display="flex">
                    {u.startDate && (
                      <Typography variant="body2">
                        {u.startDate.slice(0, 10)}
                      </Typography>
                    )}{' '}
                    {u.endDate && (
                      <Typography variant="body2">
                        - {u.endDate.slice(0, 10)}
                      </Typography>
                    )}
                  </Box>
                  {u.place && <Typography>{u.place}</Typography>}
                  {u.links.length > 0 &&
                    u.links.map((l) => <Typography>{l.linkURL}</Typography>)}
                </Box>
                {u.image && (
                  <Box m={2}>
                    <img
                      className={classes.imgWidth}
                      src={u.image.childImageSharp.fluid.src}
                    />
                  </Box>
                )}
                {!u.image && (
                  <Box m={2}>
                    <Paper className={classes.imgWidth} />
                  </Box>
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
