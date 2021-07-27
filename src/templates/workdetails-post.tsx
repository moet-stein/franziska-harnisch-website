import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Layout1 from '../components/Layout1/Layout1';

export const WorkdetailsPostTemplate = ({
  description,
  title,
  subTitle,
  layoutType,
  links,
  hashtags,
  images,
  featuredimage,
}) => {
  const workdetailsData = {
    description,
    title,
    subTitle,
    links,
    layoutType,
    hashtags,
    images,
    featuredimage,
  };
  console.log(workdetailsData);
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {layoutType === 'Layout1' && (
              <Layout1 workdetailsData={workdetailsData} />
            )}
            {layoutType === 'Layout2' && <p>layoutType2</p>}
            {layoutType === 'Layout3' && <p>layoutType3</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

WorkdetailsPostTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  layoutType: PropTypes.string,
  hashtags: PropTypes.array,
  links: PropTypes.array,
  images: PropTypes.array,
  featuredimage: PropTypes.object,
};

const WorkdetailsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WorkdetailsPostTemplate
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        layoutType={post.frontmatter.layoutType}
        hashtags={post.frontmatter.hashtags}
        links={post.frontmatter.links}
        images={post.frontmatter.images}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

WorkdetailsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default WorkdetailsPost;

export const pageQuery = graphql`
  query WorkdetailsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        description
        links {
          linkName
          linkURL
        }
        layoutType
        templateKey
        hashtags {
          hashtag
        }
        images {
          imageTitle
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        featuredimage {
          id
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
