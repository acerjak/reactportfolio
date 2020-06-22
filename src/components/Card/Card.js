import React from 'react'
import img from './IMG_0540.JPG'

const Card = () => {
    return (
        <div className="col s12 m7">
        <h4 className="header">About Me</h4>
        <div className="card horizontal">
          <div className="card-image">
            <img alt="amanda" src={img} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p onClick={ (e)=>{alert("Hi, I'm an Easter Egg!")}}>Here is my first portfolio created with React! 
                  <br></br>
                  <br></br>
                I would love to connect with you on social media.</p>
            </div>
            <div className="card-action">
              <a href="https://acerjak.github.io/ResponsivePortfolio/index.html">Click to go to my responsive portfolio</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card