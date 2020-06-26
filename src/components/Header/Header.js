import React from 'react'

const Header = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="https://acerjak.github.io/ResponsivePortfolio/index.html" className="brand-logo center hide-on-med-and-down">Amanda Cerjak</a>
          <ul className="left">
            <li><a className="waves-effect waves-light" href="/">About</a></li>
            <li><a className="waves-effect waves-light" href="/portfolio">Portfolio</a></li>
            <li><a className="waves-effect waves-light" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header