import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import LayoutHometwo from '../components/LayoutHometwo';
import { Grid } from '@material-ui/core'
import EventsFrontPage from "../components/EventsFrontPage/EventsFrontPage"
import Layout from '../components/Layout';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin:0px;
`;

const FadeInRight = styled.div`
  animation: 2s ${keyframes`${fadeInRight}`};
  
`;

const textAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const textAppear2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const animation = () =>
  css`
    ${textAppear} 4s ;
   
  `
const animation2 = () => {
  css`
    ${textAppear2} 6s ;
  
  `
}
const TitleEffect = styled.h1`
  animation: ${animation};
`
const SubtitleEffect = styled.h4`
animation: ${animation};
`
export const HometwoTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  console.log(intro)
  return (



    <div
      style={{

        display: 'flex',
        height: '100vh',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <Grid container >
        <Grid item style={{ marginLeft: 40 }}>
          <TitleEffect  >

            <h2 style={{ marginTop: 0 }}>{title}</h2>
          </TitleEffect>
          <SubtitleEffect>
            <h3 style={{ fontSize: 22 }}>{heading}</h3>
            <h3 style={{ fontSize: 22 }}>{subheading}</h3>
          </SubtitleEffect>
        </Grid>
        <Grid item>
          <EventsFrontPage events={intro.blurbs} />
        </Grid>
      </Grid>
    </div>
  )
};
const LauraTest: React.FC<any> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;


  return (
    <LayoutHometwo>
      <HometwoTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}

        intro={frontmatter.intro}
      />
    </LayoutHometwo>
  );
};
export default LauraTest;
HometwoTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  /*   futureExposiiton: PropTypes.string,
    exposition: PropTypes.string,
    dateLocation: PropTypes.string, */

  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};
export const pageQuery = graphql`
  query HometwoTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "hometwo-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
       
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
