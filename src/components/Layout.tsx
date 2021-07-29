import React from 'react';
import './NavbarHometwo/NavBarHometwo.css';
import { Helmet } from 'react-helmet';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarHometwo from './NavbarHometwo/NavBarHometwo';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { HashtagContext, HashtagProvider } from '../Context/HashtagContext.tsx';

let theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: teal[200],
  //   },
  //   secondary: {
  //     main: teal[500],
  //   },
  // },
  typography: {
    fontFamily: 'Josefin Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
theme = responsiveFontSizes(theme);

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <ThemeProvider theme={theme}>
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

        <NavbarHometwo />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default TemplateWrapper;
