import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Display1 from '../components/Display1/Display1';
import Content, { HTMLContent } from '../components/Content';

// works template 1

export const TestMoePageTemplate = ({ title, intro }) => {
  console.log(title);
  console.log(intro.blurbs);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>

              {intro.blurbs.map((i) => (
                <img src={i.image.childImageSharp.fluid.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestMoePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const TestMoePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TestMoePageTemplate
        // contentComponent={HTMLContent}
        title={frontmatter.title}
        // content={post.html}
        intro={frontmatter.intro}
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
          }
        }
      }
    }
  }
`;
