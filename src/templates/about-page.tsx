import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AboutBlocks from '../components/AboutBlocks/AboutBlocks';
import PageContainer from '../components/PageContainer';
import SEO from '../components/SEO';

export const AboutPageTemplate = ({
  title,
  generalInfo,
  ausbildung,
  preise,
  einzelaustellung,
  gruppenaustellung,
  projekte,
  location,
  cv,
}) => {
  console.log(title);
  console.log(location);
  return (
    <PageContainer title={title}>
      <div>
        <div>
          <div>
            <div>
              <AboutBlocks
                generalInfo={generalInfo}
                ausbildung={ausbildung}
                preise={preise}
                einzelaustellung={einzelaustellung}
                gruppenaustellung={gruppenaustellung}
                projekte={projekte}
                cv={cv}
              />
              {cv && cv.map(c=>(

              
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  coursor: 'pointer',
                }}
              >
                <a
                  target="_blank"
                  href={cv.link}
                >
                  {cv.text} <ArrowDownwardIcon />
                </a>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  generalInfo: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
  }),
  ausbildung: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array,
  }),
  preise: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array,
  }),
  einzelaustellung: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array,
  }),
  gruppenaustellung: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array,
  }),
  projekte: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array,
  }),
   cv: PropTypes.array,
};

const AboutPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  console.log('info', frontmatter.generalInfo);
  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.title}
        location={location}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <AboutPageTemplate
        location={location}
        title={frontmatter.title}
        generalInfo={frontmatter.generalInfo}
        ausbildung={frontmatter.ausbildung}
        texts={frontmatter.texts}
        preise={frontmatter.preise}
        einzelaustellung={frontmatter.einzelaustellung}
        gruppenaustellung={frontmatter.gruppenaustellung}
        projekte={frontmatter.projekte}
        cv={frontmatter.cv}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image
        generalInfo {
          name
          address
          website
          email
        }
        ausbildung {
          title
          texts {
            text
          }
        }
        preise {
          title
          texts {
            text
          }
        }
        einzelaustellung {
          title
          texts {
            text
            link
          }
        }
        gruppenaustellung {
          title
          texts {
            text
            link
          }
        }
        projekte {
          title
          texts {
            text
            link
          }
        }
        cv{
          text
          link
        }
      }
    }
  }
`;
