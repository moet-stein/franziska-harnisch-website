import React, { useEffect, useContext } from 'react';
import Layout1 from '../components/Layout1/Layout1'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { HashtagContext, HashtagProvider } from '../Context/HashtagContext.tsx';

// works template 1

export const WorksPageTemplate = ({ title }) => {
  const { hashtag, setHashtag } = useContext(HashtagContext);

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box mt={3} display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h2">{title}</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end" mt={3}>
                {/* <Button onClick={() => setHashtag('')}>#ALL</Button> */}
              </Box>
                <Layout1 />
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

WorksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const WorksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
      <Layout>
      <WorksPageTemplate
        title={frontmatter.title}
      />
      </Layout>
  );
};

WorksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default WorksPage;

export const workPageQuery = graphql`
  query WorksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
