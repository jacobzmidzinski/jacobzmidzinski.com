import React, { Component } from 'react'
import { graphql } from "gatsby"
import config from '../../data/Config'

import Layout from "../components/layout"

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    return (
      <Layout title={config.siteTitle}>
        <article className="single container">
            <div className="flex">
              <h1>{post.title}</h1>
            </div>
          <div className="post" dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </article>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        template
      }
      fields {
        slug
      }
    }
  }
`