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

  const url = 'https://www.codeacademyberlin.com';
  // const metaDescription = description || site.siteMetadata.description
  // const metaImage =
  //     image ? `${url}/img/${image}`
  //         : `${url}/${site.siteMetadata.ogImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: location.href,
        },
        {
          property: `og:description`,
          content: description,
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
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ]
        .concat([
          {
            property: 'og:image',
            content: image,
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
      {/* <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${withPrefix("/")}img/logo.png`}
            />
            <link
                rel="icon"
                type="image/png"
                href={`${withPrefix("/")}img/favicon-32x32.png`}
                sizes="32x32"
            />
            <link
                rel="icon"
                type="image/png"
                href={`${withPrefix("/")}img/favicon-16x16.png`}
                sizes="16x16"
            />
            <link
                rel="mask-icon"
                href={`${withPrefix("/")}img/logo.svg`}
                color="#ff4400"
            /> */}
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
