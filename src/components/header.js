import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ title }) => {
  const {
    placeholderImage: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="brand">
      <a className="" href="/">
        <Image fixed={fixed} className="avatar" />
        <span className="text">{title}</span>
      </a>
    </div>
  )
}

export default Header
