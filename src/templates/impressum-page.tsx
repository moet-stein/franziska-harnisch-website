import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HTMLContent } from '../components/Content';
import PageContainer from "../components/PageContainer"



export const ImpressumPageTemplate = ({
  title,
   html,
}) => {
    
  return (
    <PageContainer style={{margin:"50px 40px 30px 80px" }} >
      <div>
    
     <HTMLContent content={html}  />
      </div>
    </PageContainer>
  );
};

ImpressumPageTemplate.propTypes = {
  title: PropTypes.string,
 

};

const ImpressumPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
console.log("data", data)
  return (
    <Layout>
      <ImpressumPageTemplate
        title={frontmatter.title}

       html={html}

       
      />
    </Layout>
  );
};

ImpressumPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ImpressumPage;

export const impressumPageQuery = graphql`
  query ImpressumPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
          
        
      }
      html
    }
  }
`;
