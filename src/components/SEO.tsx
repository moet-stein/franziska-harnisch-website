import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix, useStaticQuery, graphql } from 'gatsby';

// highlight-next-line
function SEO({ description, lang, meta, image, title, location }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            keywords
          }
        }
      }
    `
  );

  const url = 'https://wizardly-shockley-75542d.netlify.app';
  // const metaDescription = description || site.siteMetadata.description
  const metaImage = image
    ? image
    : `https://res.cloudinary.com/dcyfdwhvk/image/upload/c_scale,f_auto,q_100,w_2400/v1628759905/O-TON_im_blackegg_PollyFaber_Kulturnacht_HGW_14_09_2012_1_ceybfe.jpg`;
  const metaTitle = title ? title : 'Works';
  console.log(metaTitle);
  const metaDescription = description ? description : '';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`${metaTitle} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:url`,
          content: location.href,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:author`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ]
        .concat([
          {
            property: 'og:image',
            content: metaImage,
          },
          // {
          //     property: "og:image:width",
          //     content: 1200,
          // },
          // {
          //     property: "og:image:height",
          //     content: 600,
          // },
          // {
          //     name: "twitter:card",
          //     content: "summary_large_image",
          // },
        ])
        .concat(meta)}
    >
      <link rel="fh" sizes="180x180" href={`${withPrefix('/')}img/logo.png`} />
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
        href={`${withPrefix('/')}img/logo.svg`}
        color="#ff4400"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // siteUrl: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  // highlight-next-line
  pathname: PropTypes.string,
};

export default SEO;
