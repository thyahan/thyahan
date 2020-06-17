/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import backgroundImage from "../images/background-image.jpg"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: `Meticulous web developer with over 3 years of front end experience and passion for Javascript especially React.js`,
        },
        {
          property: `og:title`,
          content: "Yutthana Yahan",
        },
        {
          property: `og:image`,
          content: backgroundImage,
        },
        {
          property: `og:description`,
          content: `Meticulous web developer with over 3 years of front end experience and passion for Javascript especially React.js`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `Portfolio`,
        },
        {
          name: `twitter:creator`,
          content: "Yutthana Yahan",
        },
        {
          name: `twitter:title`,
          content: "Yutthana Yahan site",
        },
        {
          name: `twitter:description`,
          content: `Meticulous web developer with over 3 years of front end experience and passion for Javascript especially React.js`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
