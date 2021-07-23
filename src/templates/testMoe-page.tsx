import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Display1 from '../components/Display1/Display1';
import Content, { HTMLContent } from '../components/Content';
import Img from 'gatsby-image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Works from '../components/Works/Works';
import { HashtagContext, HashtagProvider } from '../Context/HashtagContext.tsx';

// works template 1

export const TestMoePageTemplate = ({ title, intro, description }) => {
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
              {/* <p>{description}</p> */}
              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button onClick={() => setHashtag('')}>#ALL</Button>
              </Box>
              {/* <HashtagProvider> */}
              <Works images={intro.blurbs} />
              {/* </HashtagProvider> */}
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

TestMoePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  description: PropTypes.string,
};

const TestMoePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TestMoePageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
        image={frontmatter.image}
      />
      <Display1 />
    </Layout>
  );
};

TestMoePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TestMoePage;

export const testMoePageQuery = graphql`
  query TestMoePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            hashtags
          }
        }
      }
    }
  }
`;
