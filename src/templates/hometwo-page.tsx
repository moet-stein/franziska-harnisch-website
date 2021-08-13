import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled, { css, keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import EventsFrontPage from '../components/EventsFrontPage/EventsFrontPage';
import PictureHometwo from '../components/PictureHometwo/pictureHometwo';
import PageContainer from '../components/PageContainer';

const useStyles = makeStyles((theme) => ({
  mediaNav: {
    [theme.breakpoints.up(780)]: {
      display: 'none',
    },
  },
}));

export const HometwoTemplate = ({ image, title, event, intro, location }) => {
  console.log(intro.blurbs);
  return (
    <PageContainer>
      <div
      /*  style={{
        position: 'relative',
        left: 300,
        display: 'flex',
        width: 'fit-content',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }} */
      >
        <EventsFrontPage events={event} />

        <PictureHometwo pic={intro.blurbs} />
      </div>
    </PageContainer>
  );
};
const LauraTest: React.FC<any> = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const classes = useStyles();

  return (
    <Layout location={location}>
      <HometwoTemplate
        location={location}
        image={frontmatter.image}
        title={frontmatter.title}
        event={frontmatter.event}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};
export default LauraTest;
HometwoTemplate.propTypes = {
  image: PropTypes.string,
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
  query HometwoTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        event {
          comingTitle
          futureEvent
          lastTitle
          lastEvent
        }
        intro {
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`;
