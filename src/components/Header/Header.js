import React from 'react'

const Header = () => {
    return (
        <nav className="nav-wrapper teal lighten-2">
          <a href="https://acerjak.github.io/ResponsivePortfolio/index.html" className="brand-logo right hide-on-med-and-down">Amanda Cerjak</a>
          <ul className="left">
            <li><a className="waves-effect waves-light" href="/">About</a></li>
            <li><a className="waves-effect waves-light" href="/portfolio">Portfolio</a></li>
            <li><a className="waves-effect waves-light" href="/contact">Contact</a></li>
          </ul>
        </nav>
    )
}

export default Header