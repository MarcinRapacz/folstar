import React from "react"
import { Link } from "gatsby"

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
          <a href={developerUrl}>Marcin Rapacz</a> |{" "}
          <Link to="/privacy-policy">GDPR</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
