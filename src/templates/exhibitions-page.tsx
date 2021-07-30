import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const ExhibitionsPageTemplate = ({ title }) => {
  console.log(`title`, title);
  return <div className="content">Exhibitions</div>;
};

ExhibitionsPageTemplate.propTypes = {
  title: PropTypes.string,
};

const ExhibitionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter)

  return (
    <Layout>
      <ExhibitionsPageTemplate title={frontmatter.title} />
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
        upcomoingExhibitions {
          upcomings {
            name
            date
            place
            description
            links {
              linkName
     
            }
          }
        }
        exhibitions {
          years {
            year
            lOExhibitions {
              date
              place
              description
              links {
                linkName
                linkURL
              }
              name
              workName
            }
          }
        }
      }
    }
  }
`;
