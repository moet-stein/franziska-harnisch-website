import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HTMLContent } from '../components/Content';

export const DatenschutzPageTemplate = ({
  title,
  html,
}) => {
 
  return (
    
     <section style={{margin:"50px 40px 30px 80px" }} >
      <div>
    
     <HTMLContent content={html}  />
      </div>
    </section>
  );
};

DatenschutzPageTemplate.propTypes = {
  title: PropTypes.string,
 

};

const DatenschutzPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  console.log('info', frontmatter.generalInfo);
  return (
    <Layout>
      <DatenschutzPageTemplate
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
