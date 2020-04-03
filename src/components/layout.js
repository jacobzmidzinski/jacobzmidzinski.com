import React from "react"
import SocialFooter from "../components/footer"
import Header from "./header"
import "../styles/components/layout.scss"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  header = (
    <Header title={title} />
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <SocialFooter></SocialFooter>
    </div>
  )
}

export default Layout
