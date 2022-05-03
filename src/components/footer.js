import React, { Component } from "react"

import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaStrava as Strava
} from "react-icons/fa"

export default class SocialFooter extends Component {
  render() {
    return (
      <footer className="footer">
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
          <a
            target="__blank"
            href="https://www.strava.com/athletes/63410226"
            title="Strava"
            sx={{
              ml: 2,
              mr: 3,
              variant: "styles.navitem",
            }}
          >
            <Strava size={24} />
          </a>
        </div>
        <div>
          <p>Copyright © Jakub Zmidzinski, 2022</p>
        </div>
      </footer>
    )
  }
}
