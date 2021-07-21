import React from "react"
import styled, { css, keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import "./EventsFrontPage.css"
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
  animation: ${animation};`

export default function EventsFrontPage({ events }) {

    console.log()
    return (<div style={{marginTop:30}}>
        <h3  className="textEvent fontSizeTitle ">Coming soon:</h3>
        <TitleEffect>
            <FadeInRight className="textEvent fontSizeEvent ">{events[0].text}</FadeInRight>
        </TitleEffect>
         <h3 className="textEvent fontSizeTitle">Latest Event:</h3>
        <TitleEffect>
            <FadeInRight className="textEvent fontSizeEvent ">{events[1].text}</FadeInRight>
            </TitleEffect>
        
    </div>)
}