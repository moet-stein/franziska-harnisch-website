import React from 'react';
import { Helmet } from 'react-helmet';
import FooterHome from './FooterHome/FooterHome';
import NavbarHometwo from './NavbarHometwo/NavBarHometwo';
import NavbarHome from "./NavbarHome/NavbarHome"
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mediaNav: {
    [theme.breakpoints.up(1200)]: {
      display: "none"
    }
  }
}))
const drawerWidth = {

  '@media (minWidth: 780px)': {
    display: "none",
  }
}
const TemplateWrapperHomeTwo = ({ children }) => {
  const classes = useStyles();
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <NavbarHometwo style={drawerWidth} />
      <div >{children}</div>
      <FooterHome />
    </div>
  );
};

export default TemplateWrapperHomeTwo;
