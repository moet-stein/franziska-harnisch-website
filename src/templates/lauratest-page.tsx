import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import LayoutHome from '../components/LayoutHome';
import Layout from '../components/Layout';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
const animation = () =>
  css`
    ${textAppear} 4s ;
  `

const TitleEffect = styled.h1`
  animation: ${animation};
`
export const LauraTestTemplate: React.FC<IndexProps> = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  exposition,
  dateLocation,
  intro,
}) => (


 
  <div
    style={{
      
      display: 'flex',
      height: '150px',
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column',
    }}
  >
    <div style={{ marginTop: 300, position: "relative" }}>   
      <TitleEffect >{title}</TitleEffect>
      <TitleEffect>
       <FadeInRight style={{position:"relative", left:"50%"}}>
        <p>{exposition}</p>
        <p>{dateLocation}</p>
      </FadeInRight>
     </TitleEffect>
      
      
      </div>
  </div>
);
const LauraTest: React.FC<any> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;


  return (
    <LayoutHome>
      <LauraTestTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        exposition={frontmatter.exposition}
        dateLocation={frontmatter.dateLocation}
        intro={frontmatter.intro}
      />
    </LayoutHome>
  );
};
export default LauraTest;
LauraTestTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  exposition: PropTypes.string,
  dateLocation: PropTypes.string,
  
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};
export const pageQuery = graphql`
  query LauraTestTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "lauratest-page" } }) {
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
        exposition
        dateLocation
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
