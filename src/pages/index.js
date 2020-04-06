import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import config from '../../data/Config'

const BlogIndex = ({ data, location }) => {
  const siteTitle = config.siteTitle

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
