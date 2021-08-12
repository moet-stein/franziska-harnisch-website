import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Layout1 from '../components/Layout1/Layout1';
import Layout2 from '../components/Layout2/Layout2';
import Layout3 from '../components/Layout3/Layout3';
import Content, { HTMLContent } from '../components/Content';
import PageContainer from '../components/PageContainer';

export const WorkdetailsPostTemplate = ({
  title,
  subTitle,
  layoutType,
  links,
  hashtags,
  images,
  featuredimage,
  titleToShow,
  pdfs,
  youtubeVideos,
  excerpt,
  content,
  contentComponent,
}) => {
  const workdetailsData = {
    title,
    subTitle,
    links,
    layoutType,
    hashtags,
    images,
    featuredimage,
    titleToShow,
    pdfs,
    excerpt,
    youtubeVideos,
    content,
    contentComponent,
  };

  return (
    <PageContainer className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {/* {!layoutType && (
              <WorkDeTemplate workdetailsData={workdetailsData} />
            )} */}
            {layoutType === 'Layout1' && (
              <Layout1 workdetailsData={workdetailsData} />
            )}
            {layoutType === 'Layout2' && (
              <Layout2 workdetailsData={workdetailsData} />
            )}
            {layoutType === 'Layout3' && (
              <Layout3 workdetailsData={workdetailsData} />
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

WorkdetailsPostTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  layoutType: PropTypes.string,
  hashtags: PropTypes.array,
  links: PropTypes.array,
  images: PropTypes.array,
  featuredimage: PropTypes.string,
  titleToShow: PropTypes.string,
  pdfs: PropTypes.array,
  excerpt: PropTypes.string,
  youtubeVideos: PropTypes.array,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const WorkdetailsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WorkdetailsPostTemplate
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        layoutType={post.frontmatter.layoutType}
        hashtags={post.frontmatter.hashtags}
        links={post.frontmatter.links}
        images={post.frontmatter.images}
        featuredimage={post.frontmatter.featuredimage}
        titleToShow={post.frontmatter.titleToShow}
        pdfs={post.frontmatter.pdfs}
        excerpt={post.excerpt}
        youtubeVideos={post.frontmatter.youtubeVideos}
        content={post.html}
        contentComponent={HTMLContent}
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
      excerpt
      html
      frontmatter {
        title
        titleToShow
        subTitle
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
          image
        }
        youtubeVideos {
          videoTitle
          videoURL
        }
        featuredimage
        pdfs {
          pdf
          pageNumbers
          pdfTitle
        }
      }
    }
  }
`;
