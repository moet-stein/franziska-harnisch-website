import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Display1 from '../components/Display1/Display1';
import Content, { HTMLContent } from '../components/Content';

// works template 1

export const TestMoePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestMoePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const TestMoePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TestMoePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      <Display1 />
    </Layout>
  );
};

TestMoePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TestMoePage;

export const testMoePageQuery = graphql`
  query TestMoePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
