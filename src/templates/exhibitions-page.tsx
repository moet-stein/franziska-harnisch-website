import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Exhibitions from '../components/Exhibitions/Exhibitions';
import PageContainer from '../components/PageContainer';
import SEO from '../components/SEO';
import { FormattedMessage } from 'react-intl';


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
  location,
}) => {
  const classes = useStyles();
  return (
    <PageContainer>
      <Box className={classes.flexColumn}>
        <Box>
          <Typography variant="h2"><FormattedMessage id="exhibitions" /></Typography>
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

const ExhibitionsPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.title}
        location={location}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <ExhibitionsPageTemplate
        location={location}
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
        description
        image
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
