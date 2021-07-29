import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

export function RelatedImgs({ hashtags, data }) {
  console.log(hashtags);
  console.log(data);
  return <div>RELATED IMAGE</div>;
}

RelatedImgs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query RelatedImQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "workdetails-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                hashtags {
                  hashtag
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
        }
      }
    `}
    render={(data) => <RelatedImgs data={data} />}
  />
);
