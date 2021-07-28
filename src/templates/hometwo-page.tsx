import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import LayoutHometwo from '../components/LayoutHometwo';
import EventsFrontPage from "../components/EventsFrontPage/EventsFrontPage"
import PictureHometwo from "../components/PictureHometwo/pictureHometwo"
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
  event,
  intro,
}) => {
  console.log(intro.blurbs)
  return (



    <div
      style={{
        position: "relative",
        left: 300,
        display: 'flex',
        width: "fit-content",
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <EventsFrontPage events={event} />

      <PictureHometwo pic={intro.blurbs} />


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
        event={frontmatter.event}

        intro={frontmatter.intro}
      />
    </LayoutHometwo>
  );
};
export default LauraTest;
HometwoTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  event: PropTypes.shape({
    comingTitle: PropTypes.string,
    futureEvent: PropTypes.string,
    lastTitle: PropTypes.string,
    lastEvent: PropTypes.string,
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};
export const pageQuery = graphql`
        query HometwoTemplate {
          markdownRemark(frontmatter: {templateKey: {eq: "hometwo-page" } }) {
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
        event{
          comingTitle,
          futureEvent,
          lastTitle,
          lastEvent
        }

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
