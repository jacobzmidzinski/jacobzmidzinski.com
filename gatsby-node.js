const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pagePage = path.resolve(`./src/templates/page.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const edges = result.data.allMarkdownRemark.edges

  edges.forEach((edge, index) => {

    if (edge.node.frontmatter.template === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: pagePage,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }

    // if (edge.node.frontmatter.template === 'post') {
    //   createPage({
    //     path: edge.node.fields.slug,
    //     component: blogPost,
    //     context: {
    //       slug: edge.node.fields.slug,
    //     },
    //   })
    // }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
