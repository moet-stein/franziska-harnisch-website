import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Display1 from '../components/Display1/Display1';
import Content, { HTMLContent } from '../components/Content';
import Img from 'gatsby-image';
import Works from '../components/Works/Works';

// works template 1

export const TestMoePageTemplate = ({ title, intro, description }) => {
  console.log(title);
  console.log(intro.blurbs);

  useEffect(() => {
    console.log(intro.blurbs.filter((i) => i.image.childImageSharp));
  }, []);

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <p>{description}</p>
              <Works images={intro.blurbs} />
            </div>
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
            blurbs {
              text
            }
          }
        }
      }
    }
  }
`;
