import React from 'react';
import './NavbarHometwo/NavBarHometwo.css';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import messages_de from '../data/de.json';
import messages_en from '../data/en.json';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarHometwo from './NavbarHometwo/NavBarHometwo';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { NavBarProvider } from '../context/NavbarContext';

const messages = {
  de: messages_de,
  en: messages_en,
};

let theme = createTheme({
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

const TemplateWrapper = ({ children, location }) => {
  const { title, description, languages } = useSiteMetadata();
  const url = location.pathname;
  console.log('url', url);
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  console.log('langKey', langKey);
  console.log('langs', langs);
  const homeLink = `/${langKey}/`;
  console.log('homeLink', homeLink);

  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
    (item) => ({
      ...item,
      link: item.link.replace(`/${defaultLangKey}/`, '/'),
    })
  );
  console.log('langsmenu', langsMenu);
  return (
    <div>
      <NavBarProvider>
        <IntlProvider locale={langKey} messages={messages[langKey]}>
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

            <NavbarHometwo langs={langsMenu} langKey={langKey} url={url} />
            <div>{children}</div>
            <Footer langs={langsMenu} langKey={langKey} url={url} />
          </ThemeProvider>
        </IntlProvider>
      </NavBarProvider>
    </div>
  );
};

export default TemplateWrapper;
