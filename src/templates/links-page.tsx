import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PageContainer from "../components/PageContainer"

const useStyles = makeStyles((theme) => ({
  linkWidth: { width: '30%' },
  noDec: {
    textDecoration: 'none',
    color: blueGrey[700],
  },
  '@media only screen and (max-width: 600px)': {
    marginPic: {
      marginLeft: theme.spacing(1),
    },
  },
}));

export const LinksPageTemplate = ({ title, links }) => {
  console.log('links', links);
  const classes = useStyles();

  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70,
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt={5}
        >
          {links.map((l) => {
            return (
              <Box
                key={l.text}
                className={classes.linkWidth}
                mb={5}
                display="flex"
                justifyContent="center"
              >
                <Button>
                  <a target="_blank" href={l.url} className={classes.noDec}>
                    {l.text.length > 30 ? (
                      <Typography variant="body1">
                        {l.text.slice(0, 30)}. . .
                      </Typography>
                    ) : (
                      <Typography variant="body1">{l.text}</Typography>
                    )}
                  </a>
                </Button>
              </Box>
            );
          })}
        </Box>
      </div>
    </PageContainer>
  );
};

LinksPageTemplate.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

const LinksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LinksPageTemplate title={frontmatter.title} links={frontmatter.links} />
    </Layout>
  );
};

LinksPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LinksPage;

export const linksPageQuery = graphql`
  query LinksPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        links {
          url
          text
        }
      }
    }
  }
`;
