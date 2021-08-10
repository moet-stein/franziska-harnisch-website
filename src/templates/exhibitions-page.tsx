import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Exhibitions from '../components/Exhibitions/Exhibitions';
import PageContainer from "../components/PageContainer"

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
  upcomingExhibitions,
  exhibitions,
}) => {
  console.log(upcomingExhibitions);
  console.log(title);
  const classes = useStyles();
  return (
    <PageContainer>
    <Box className={classes.flexColumn}>
      <Box mt={3}>
        <Typography variant="h1">Exhibitions</Typography>
      </Box>
      <Box>
        <Exhibitions
          upcomingExhibitions={upcomingExhibitions.upcomings}
          exhibitions={exhibitions.years}
        />
      </Box>
    </Box>
    </PageContainer>
  );
};

ExhibitionsPageTemplate.propTypes = {
  title: PropTypes.string,
  upcomingExhibitions: PropTypes.array,
  exhibitions: PropTypes.object,
};

const ExhibitionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <ExhibitionsPageTemplate
        title={frontmatter.title}
        upcomingExhibitions={frontmatter.upcomingExhibitions}
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
        upcomingExhibitions {
          upcomings {
            name
            startDate
            endDate
            place
            description
            links {
              linkName
              linkURL
            }
            image
          }
        }
        exhibitions {
          years {
            year
            lOExhibitions {
              startDate
              endDate
              place
              description
              links {
                linkName
                linkURL
              }
              name
              workName
              image
              }
            }
          }
        }
      }
    }
`;
