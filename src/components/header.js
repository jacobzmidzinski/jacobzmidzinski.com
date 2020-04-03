import React from "react"
import Image from "gatsby-image"

const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "../../content/images/avatar.png" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return (
    <div className="brand">
        <a className="" href="/">
          <Image fixed={data.avatar.childImageSharp.fixed} className="avatar" />
          <span className="text">{title}</span>
        </a>
    </div>
  )
}

export default Header
