import React from "react"
import Image from "gatsby-image"
import { Link } from 'gatsby'
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
    <div className="nav-container">
      <div className="brand">
        <Link to="/">
          <Image fixed={fixed} className="avatar" />
          <span className="text">{title}</span>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">
          About
        </Link>
        <Link to="/wiki">
          Wiki
        </Link>
      </div>
    </div>
  )
}

export default Header
