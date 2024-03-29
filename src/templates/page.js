import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import config from '../../data/Config'

export default class PageTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const page = postNode.frontmatter

    if (!page.id) {
      page.id = slug
    }

    return (
      <Layout title={config.siteTitle}>
        <SEO />
        <div className="container">
          <article>
            <header className="page-header">
              <h1>{page.title}</h1>
            </header>
            <div className="page" dangerouslySetInnerHTML={{ __html: postNode.html }}/>
          </article>
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        template
      }
      fields {
        slug
      }
    }
  }
`