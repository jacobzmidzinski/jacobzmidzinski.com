import React, { Component } from 'react'

import firebaseIcon from '../../content/images/firebase.png'
import gatsbyIcon from '../../content/images/gatsby.png'
import githubIcon from '../../content/images/github.png'

export default class Footer extends Component {
    render() {
      return (
        <footer className="footer container">
          <div>
            <a href="https://github.com/jacobzmidzinski" title="Open-source on GitHub">
              <img
                src={githubIcon}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-img"
                alt="GitHub"
              />
            </a>
            <a href="https://firebase.google.com/" title="Hosted on Firebase Hosting">
              <img
                src={firebaseIcon}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-img"
                alt="GitHub"
              />
            </a>
            <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
              <img
                src={gatsbyIcon}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-img"
                alt="GitHub"
              />
            </a>
          </div>
        </footer>
      )
    }
  }