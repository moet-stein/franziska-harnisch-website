import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class WorkdetailsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(data);

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail"></div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
      </div>
    );
  }
}

WorkdetailsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query WorkdetailsRollQuery {
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
                  image {
                    id
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
        }
      }
    `}
    render={(data, count) => <WorkdetailsRoll data={data} count={count} />}
  />
);
