import React from 'react'
import img from './IMG_0540.JPG'

const Card = () => {
    return (
      <>
        <div className="row" style={{display: "inline-block"}}>
          <div className="col s4 hide-on-small-only"></div>
          <div className="col s4 aboutCard">
            <div className="card hoverable">
              <div className="card-image">
                <img src={img} alt="me" className="responsive-img aboutImg"/>
                <span className="card-title">About Me</span>
              </div>
              <div className="card-content">
              <p onClick={ (e)=>{alert("You found the first easter egg!")}}>
                My name is Amanda Cerjak (pronounced Sir-Jack) and this is my first portfolio created with ReactJS! I am a recent graduate from University of California, Irvine's Coding Bootcamp for Web Development. I also have my Bachelor's degree from California State University of Fullerton in Biological Science and minor in Chemistry. I would describe myself as an eager and enthusiastic professional looking to get my foot in the door as a junior developer and learn more about the industry of computer science. 
                <br></br>
                <br></br>
                If you would like to know more, I would love to connect with you on social media. My main accounts are linked below or simply see the Contact page for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Card