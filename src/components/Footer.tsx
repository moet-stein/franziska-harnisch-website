import React, { useRef, useState } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import ListIcon from '@material-ui/icons/List';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import instagram from '../img/social/instagram.svg';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(() => ({
  instagramLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    background: 'white',
    width: '100%',
    height: '7vh',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid grey',
    paddingTop: '5px',
    fontFamily: 'Josefin Sans',
    fontSize: 11,
  },
  menu: {
    background: '#ffffff',
    borderRadius: 8,
    position: 'absolute',
    top: 60,
    left: 0,
    width: 130,
    opacity: 0,
    visibility: 'hidden',
    transform: 'translate(-100px, auto)',
    transition: ' opacity 0.4s ease, transform 0.4s ease, visibility 0.4s',
    pointerEvents: 'none',
  },
  menuActive: {
    opacity: 1,
    visibility: 'visible',
    transform: 'translate(35px,-25px)',
    pointerEvents: 'all',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export function Footer({ langKey, data }) {
  const classes = useStyles();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  // const { edges: posts } = data.allMarkdownRemark;
  const { edges: posts } = data.allMarkdownRemark;
  console.log('footerData in footer', posts[0].node.frontmatter);

  const onClick = () => {
    setIsActive(!isActive);
  };
  console.log('active', isActive);
  const impressumLink =
    langKey === 'en' ? `/${langKey}/impressum` : '/impressum';
  const impressumText = langKey === 'en' ? 'Imprint' : 'Impressum';
  const datenschutzLink =
    langKey === 'en'
      ? `/${langKey}/datenschutzverordnung`
      : '/datenschutzverordnung';
  const datenschutzText =
    langKey === 'en' ? 'Date protection regulation' : 'Datenschutzverordnung';
  return (
    <footer className={classes.footerContainer}>
      <div style={{ maxWidth: '100vw' }} className="columns">
        <div className={classes.instagramLink}>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
        </div>
        <div className={classes.instagramLink}>
          <p>| Copyrights © - Franziska Harnisch 2021 |</p>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ListIcon style={{ display: 'inline-block' }} onClick={onClick} />
        <nav
          ref={dropdownRef}
          className={`${isActive ? 'menuActive' : 'menu'}`}
          role="navigation"
          aria-label="main-navigation"
        >
          <Button
            to={impressumLink}
            component={Link}
            style={{
              textTransform: 'capitalize',
              marginRight: 7,
              fontSize: 12,
              padding: 0,
              background: 'white',
            }}
          >
            {impressumText}
          </Button>
          <Button
            to={datenschutzLink}
            component={Link}
            style={{
              textTransform: 'capitalize',
              margin: 4,
              fontSize: 12,
              padding: 0,
              background: 'white',
            }}
          >
            {datenschutzText}
          </Button>
        </nav>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "footer-data" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                copyright
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      return <Footer data={data} />;
    }}
  />
);
