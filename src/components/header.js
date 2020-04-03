import React from "react"
import avatar from "../../content/images/avatar.png"

const Header = ({ title }) => {
  return (
    <div className="brand">
        <a className="" href="/">
          <img src={avatar} className="avatar" />
          <span className="text">{title}</span>
        </a>
    </div>
  )
}

export default Header
