import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HTMLContent } from '../components/Content';
import PageContainer from '../components/PageContainer';

export const DatenschutzPageTemplate = ({ title, html, location }) => {
  return (
    <PageContainer>
      <div style={{ margin: '50px 40px 30px 80px' }}>
        <HTMLContent content={html} />
      </div>
    </PageContainer>
  );
};

DatenschutzPageTemplate.propTypes = {
  title: PropTypes.string,
};

const DatenschutzPage = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  console.log('info', frontmatter.generalInfo);
  console.log('location', location);
  return (
    <Layout location={location}>
      <DatenschutzPageTemplate
        location={location}
        title={frontmatter.title}
        html={html}
      />
    </Layout>
  );
};

DatenschutzPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DatenschutzPage;

export const datenschutzPageQuery = graphql`
  query DatenschutzPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
