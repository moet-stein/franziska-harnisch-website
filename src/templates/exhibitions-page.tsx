import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Exhibitions from '../components/Exhibitions/Exhibitions';

const useStyles = makeStyles(() => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    width: '100vw',
    backgroundColor: '#111',
  },
}));

export const ExhibitionsPageTemplate = ({
  title,
  upcomoingExhibitions,
  exhibitions,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.flexColumn}>
      <Box mt={3}>
        <Typography variant="h1">Exhibitions</Typography>
      </Box>
      <Box>
        <Exhibitions
          upcomingExhibitions={upcomoingExhibitions[0].upcomings}
          exhibitions={exhibitions.years}
        />
      </Box>
    </Box>
  );
};

ExhibitionsPageTemplate.propTypes = {
  title: PropTypes.string,
  upcomoingExhibitions: PropTypes.array,
  exhibitions: PropTypes.object,
};

const ExhibitionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <ExhibitionsPageTemplate
        title={frontmatter.title}
        upcomoingExhibitions={frontmatter.upcomoingExhibitions}
        exhibitions={frontmatter.exhibitions}
      />
    </Layout>
  );
};

ExhibitionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ExhibitionsPage;

export const exhibitionsPageQuery = graphql`
  query ExhibitionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        upcomoingExhibitions {
          upcomings {
            name
            date
            place
            description
            links {
              linkName
            }
          }
        }
        exhibitions {
          years {
            year
            lOExhibitions {
              date
              place
              description
              links {
                linkName
                linkURL
              }
              name
              workName
            }
          }
        }
      }
    }
  }
`;
