import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Exhibitions from '../components/Exhibitions/Exhibitions';
import PageContainer from '../components/PageContainer';
import SEO from '../components/SEO';

const useStyles = makeStyles(() => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    width: '100vw',
    backgroundColor: '#111',
  },
}));

export const FooterDataTemplate = ({
    copyright
}) => {
  const classes = useStyles();
  return (
    <PageContainer>
      <h2>{copyright}</h2>
    </PageContainer>
  );
};

FooterDataTemplate.propTypes = {
  copyright: PropTypes.string,
};

const FooterData = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
      <FooterDataTemplate
        copyright={frontmatter.copyright}
      />
  );
};

FooterData.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FooterData;

export const footerDataQuery = graphql`
  query FooterData($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        copyright
      }
    }
  }
`;
