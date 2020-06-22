import React from 'react'

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="https://acerjak.github.io/ResponsivePortfolio/index.html" className="brand-logo center">Amanda Cerjak</a>
          <ul className="left hide-on-med-and-down">
            <li className="active"><a href="/">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar