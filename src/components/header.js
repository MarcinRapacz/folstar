import React from "react"

const Header = ({children}) => (
  <header className="site-header">
    <div className="site-header-content">
      {children}
    </div>
  </header>
)

export default Header