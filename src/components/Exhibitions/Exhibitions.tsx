import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import Link1 from '@material-ui/core/Link';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  greyColor: {
    color: grey[600],
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumnNoCenter: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  upWidth: {
    width: '500px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgWidth: {
    width: '180px',
    borderRadius: '5px',
  },
  greyFont: {
    color: grey[600],
    width: '250px',
  },
  greyFont2: {
    color: grey[600],
    width: '350px',
  },
}));

export default function Exhibitions({ upcomingExhibitions, exhibitions }) {
  const classes = useStyles();
  const [upcomingDate, setUpcomingDate] = useState('');
  console.log(upcomingExhibitions, exhibitions);

  const toSlug = (str) => {
    return decodeURI(str).split(' ').join('-');
  };

  return (
    <>
      <Box className={classes.flexColumn} mt={3}>
        {upcomingExhibitions.length > 0 && (
          <Typography variant="h3" className={classes.greyColor}>
            Upcomings
          </Typography>
        )}
        <Box className={classes.flexWrap}>
          {upcomingExhibitions.length > 0 &&
            upcomingExhibitions.map((u) => (
              <Box key={u.name} className={classes.upWidth}>
                <Box>
                  <Typography variant="h5">{u.name}</Typography>
                  <Box display="flex">
                    {u.startDate && u.startDate.length > 0 && (
                      <Typography variant="body1">
                        {u.startDate.slice(0, 10)}
                      </Typography>
                    )}{' '}
                    {u.endDate && u.endDate.length > 0 && (
                      <Typography variant="body1">
                        - {u.endDate.slice(0, 10)}
                      </Typography>
                    )}
                  </Box>
                  {u.place && u.place.length > 0 && (
                    <Typography>{u.place}</Typography>
                  )}
                  {u.description && u.description.length > 0 && (
                    <Typography variant="body2" className={classes.greyFont}>
                      {u.description}
                    </Typography>
                  )}
                  {u.links &&
                    u.links.length > 0 &&
                    u.links.map((l) => (
                      <Link1 key={l.linkURL} href={l.linkURL}>
                        <Typography>{l.linkName}</Typography>
                      </Link1>
                    ))}
                </Box>
                {u.image && (
                  <Box m={2}>
                    <img
                      className={classes.imgWidth}
                      src={u.image}
                    />
                  </Box>
                )}
                {/* {!u.image && (
                  <Box m={2}>
                    <Paper className={classes.imgWidth} />
                  </Box>
                )} */}
              </Box>
            ))}
        </Box>
      </Box>
      <Box className={classes.flexColumn} mt={5}>
        {exhibitions.length > 0 && (
          <Typography variant="h3" className={classes.greyColor}>
            Past Exhibitions
          </Typography>
        )}
        {exhibitions.length > 0 &&
          exhibitions.map((e) => (
            <Box key={e.year} alignSelf="flex-start" ml={7} mb={6}>
              <Typography variant="h4">{e.year}</Typography>

              <Box className={classes.flexColumn}>
                {e.lOExhibitions.map((ex) => (
                  <Box display="flex" ml={10}>
                    <Box m={2}>
                      <Box className={classes.flexColumnNoCenter}>
                        <Typography variant="h5">{ex.name}</Typography>
                        <Box display="flex">
                          {ex.startDate && ex.startDate.length > 0 && (
                            <Typography variant="body1">
                              {ex.startDate.slice(0, 10)}
                            </Typography>
                          )}{' '}
                          {ex.endDate && ex.endDate.length > 0 && (
                            <Typography variant="body1">
                              - {ex.endDate.slice(0, 10)}
                            </Typography>
                          )}
                        </Box>
                        {ex.place && ex.place.length > 0 && (
                          <Typography>{ex.place}</Typography>
                        )}
                        {ex.description && ex.description.length > 0 && (
                          <Typography
                            variant="body2"
                            className={classes.greyFont2}
                          >
                            {ex.description}
                          </Typography>
                        )}
                        {ex.links &&
                          ex.links.length > 0 &&
                          ex.links.map((l) => (
                            <Link key={l.linkURL} href={l.linkURL}>
                              <Typography>{l.linkName}</Typography>
                            </Link>
                          ))}
                        <Box m={2}>
                          {ex.workName && ex.workName.length > 0 && (
                            <Link to={`/workdetails/${toSlug(ex.workName)}/`}>
                              <Button variant="outlined">
                                <Typography variant="body1">
                                  See More
                                </Typography>
                              </Button>
                            </Link>
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Box m={4}>
                      {ex.image && (
                        <img
                          className={classes.imgWidth}
                          src={ex.image}
                        />
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
      </Box>
    </>
  );
}
