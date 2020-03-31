import React, { Component } from "react"

import firebaseIcon from "../../content/images/firebase.png"
import gatsbyIcon from "../../content/images/gatsby.png"

import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
} from "react-icons/fa"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a
            target="__blank"
            href="https://www.linkedin.com/in/jakubzmidzinski/"
            title="LinkedIn"
            sx={{
              ml: 2,
              mr: 3,
              variant: "styles.navitem",
            }}
          >
            <LinkedIn size={24} />
          </a>
          <a
            target="__blank"
            href="https://github.com/jacobzmidzinski"
            title="Open-source on GitHub"
            sx={{
              ml: 2,
              mr: 3,
              variant: "styles.navitem",
            }}
          >
            <GitHub size={24} />
          </a>
          <a
            target="__blank"
            href="https://twitter.com/jacobzmidzinski"
            title="Twitter"
            sx={{
              ml: 2,
              mr: 3,
              variant: "styles.navitem",
            }}
          >
            <Twitter size={24} />
          </a>
        </div>
        <div>
          <p>Copyright © Jacob Zmidzinski, 2020</p>
        </div>
      </footer>
    )
  }
}
