import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  const templateUrl =
    "https://www.gatsbyjs.com/starters/stackrole/gatsby-starter-foundation/"
  const developerUrl = "https://www.linkedin.com/in/marcin-rapacz/"

  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          {year} @Folstar | Created using{" "}
          <a href={templateUrl}>Gatsby Starter</a> | Developing by{" "}
          <a href={developerUrl}>Marcin Rapacz</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
