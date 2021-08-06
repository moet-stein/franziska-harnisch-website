import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export const DatenschutzPageTemplate = ({
  title,
  text,
 name,
 location,
 email
}) => {
  console.log(title);
  return (
    <section>
      <div>
     {title}
      </div>
    </section>
  );
};

DatenschutzPageTemplate.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,

};

const DatenschutzPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  console.log('info', frontmatter.generalInfo);
  return (
    <Layout>
      <DatenschutzPageTemplate
        title={frontmatter.title}
        name={frontmatter.name}
        text={frontmatter.text}
        location={frontmatter.location}
        email={frontmatter.email}

       
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
        text
        name
        location
        email
        
        
      }
    }
  }
`;
