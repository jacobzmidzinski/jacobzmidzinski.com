import React, { Component } from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AppStoreButton = ({ appName }) => {
  const {
    placeholderImage: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "trailersDatabase-logo.png" }
      ) {
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
      <Image fixed={fixed} class="avatar"/>
      <span className="text">{appName}</span>
      <a href="https://apps.apple.com/us/app/trailers-database/id1393732085?mt=8">
        <div
          style={{
            display: `inline-block'`,
            overflow: `hidden`,
            backgroundImage: `url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-07-09&kind=iossoftware&bubble=ios_apps)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: `135px`,
            height: `40px`,
          }}
        />
      </a>
    </div>
  )
}

export default AppStoreButton
