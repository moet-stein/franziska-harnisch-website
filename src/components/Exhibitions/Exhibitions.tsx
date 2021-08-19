import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import Link1 from '@material-ui/core/Link';
import { Link } from 'gatsby';
import { NavBarContext } from '../../context/NavbarContext';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  greyColor: {
    color: grey[600],
  },
  width300: { width: '300px' },
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
  upcoming: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  upWidth: {
    width: '500px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow:
      'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    padding: '10px',
  },
  imgWidth: {
    width: '180px',
    borderRadius: '5px',
    boxShadow: '6px 6px 2px 1px rgba(0, 0, 0, .2)',
  },
  boxEx: {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    marginBottom: theme.spacing(3),
    borderRadius: '3px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  greyFont: {
    color: grey[600],
    width: '250px',
  },
  greyFont2: {
    color: grey[600],
    width: '350px',
  },
  '@media only screen and (max-width: 700px)': {
    upcoming: {
      width: '300px',
    },
    upWidth: { width: '300px' },
    boxEx: { width: '300px' },
    flexColumnNoCenter: {
      width: '100%',
    },
    width300: { width: '300px' },
    greyFont2: { width: '280px' },
    imgWidth: { marginLeft: '30px' },
  },
}));

export default function Exhibitions({ upcomingExhibitions, exhibitions }) {
  const classes = useStyles();
  const { negZIndex } = useContext(NavBarContext);

  const toSlug = (str) => {
    return decodeURI(str).split(' ').join('-');
  };

  return (
    <>
      <Box className={classes.flexColumn} mt={3}>
        {upcomingExhibitions.length > 0 && (
          <Box m={4}>
            <Typography variant="h4" className={classes.greyColor}>
              <FormattedMessage id="upcoming" />
            </Typography>
          </Box>
        )}
        <Box className={classes.upWidth}>
          {upcomingExhibitions.length > 0 &&
            upcomingExhibitions.map((u) => (
              <Box
                display="flex"
                flexWrap="wrap"
                key={u.name}
                className={classes.upcoming}
              >
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
                    <img className={classes.imgWidth} src={u.image} />
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      </Box>

      {/* Past exhibitions */}
      <Box className={classes.flexColumn} mt={5}>
        {exhibitions.length > 0 && (
          <Box m={4}>
            <Typography variant="h4" className={classes.greyColor}>
              <FormattedMessage id="pastEx" />
            </Typography>
          </Box>
        )}
        {exhibitions.length > 0 &&
          exhibitions.map((e) => (
            <Box key={e.year} mb={6}>
              <Box mb={3}>
                <Typography align="center" variant="h4">
                  {e.year}
                </Typography>
              </Box>

              <Box className={classes.flexColumn}>
                {e.lOExhibitions.map((ex) => (
                  <Box key={ex.name} display="flex" className={classes.boxEx}>
                    <Box className={classes.flexColumnNoCenter} m={2}>
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
                          <Link
                            to={`/workdetails/${toSlug(ex.workName)}/`}
                            style={{ textDecoration: 'none' }}
                          >
                            {negZIndex ? (
                              <Button
                                style={{ zIndex: '-1000' }}
                                variant="outlined"
                              >
                                <Typography variant="body1">
                                  <FormattedMessage id="seeMore" />
                                </Typography>
                              </Button>
                            ) : (
                              <Button variant="outlined">
                                <Typography variant="body1">
                                  <FormattedMessage id="seeMore" />
                                </Typography>
                              </Button>
                            )}
                          </Link>
                        )}
                      </Box>
                    </Box>

                    <Box m={4}>
                      {ex.image && (
                        <img className={classes.imgWidth} src={ex.image} />
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
