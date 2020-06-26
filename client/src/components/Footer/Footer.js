import React from 'react'
import igIMG from './instagramIcon.png'
import linkedIMG from './linkedinIcon.png'
import gitIMG from './githubIcon.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer center">
        <h4 style={{marginTop: "0px"}}>Follow Me:</h4>
              <a className="icons" href="https://www.linkedin.com/in/acerjak/"><img className="socialIcons" src={linkedIMG} alt="LinkedIn"/></a>
              <a className="icons" href="https://github.com/acerjak"><img className="socialIcons" src={gitIMG} alt="GitHub"/></a>
              <a className="icons igIcon" href="https://www.instagram.com/amandacerjak/?hl=en"><img className="socialIcons" src={igIMG} alt="Instagram"/></a>
        </footer>
    )
}

export default Footer