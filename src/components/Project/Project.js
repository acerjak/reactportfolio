import React from 'react'
import Responsive from './ResponsiveBio.JPG'
import Code from './codeQuiz.JPG'
import burger from './burger.JPG'
import dealTrack from './dealTracker.JPG'
import IEQ from './InterviewEQ.png'
import empDirect from './empDirectory.JPG'

const Project = () => {
    return (
        <>
        <div className="container">
        <div className="row" style={{display: "inline-block"}}>
            <div className="col s12 m5 l5 card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Responsive} alt="Responsive"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><p className="material-icons right activator">⋮</p>First Portfolio</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>This was my first portfolio made during my time in UCI's coding bootcamp. I used HTML and CSS as my front-end UI technologies and Materialize for my styling library. 
                    Our main objective was to make this application mobile first and to showcase our talents with only a few weeks of coding experience.
                <br></br>
                <a className="links" href="https://acerjak.github.io/ResponsivePortfolio/index.html">Link to Project</a>
                <br></br>
                <a className="links" href="https://github.com/acerjak/ResponsivePortfolio">Link to GitHub Repository</a>
                </p>
            </div>
        </div>
        <div className="col l2 midDiv hide-on-small-only"></div>
        <div className="col s12 m5 l5 card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Code} alt="Code"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Code Quiz<p className="material-icons right activator">⋮</p></span>
                
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="links" href="https://acerjak.github.io/CodeQuiz/">Link to Project</a>  
                <br></br>
                <a className="links" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a>
                </p>
            </div>
            </div>
        </div>
        <div className="row" style={{display: "inline-block"}}>
            <div className="col s12 m5 l5 card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img onClick={ (e)=>{alert("NOMNOMNOM!")}} className="activator" src={burger} alt="burger"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><p className="material-icons right activator">⋮</p>Burger Game</span>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="links" href="https://glacial-springs-08945.herokuapp.com/">Link to Project</a>
                <br></br>
                <a className="links" href="https://github.com/acerjak/burger">Link to GitHub Repository</a>
                </p>
            </div>
        </div>
        <div className="col l2 midDiv hide-on-small-only"></div>
        <div className="col s12 m5 l5 card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={IEQ} alt="IEQ"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">InterviewEQ<p className="material-icons right activator">⋮</p></span>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="links" href="https://maximilliancharlemagne.github.io/emotion-engine/index">Link to Project</a>   
                <br></br>
                <a className="links" href="https://github.com/maximilliancharlemagne/emotion-engine">Link to GitHub Repository</a>
                </p>
            </div>
            </div>
        </div>
        <div className="row" style={{display: "inline-block"}}>
            <div className="col s12 m5 l5 card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={dealTrack} alt="dealTrack"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><p className="material-icons right activator">⋮</p>Deal Tracker</span>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="links" href="https://deal-tracker-app.herokuapp.com/index.html">Link to Project</a>
                <br></br>
                <a className="links" href="https://github.com/Logan96M/Deal_Tracker">Link to GitHub Repository</a>
                </p>
            </div>
        </div>
        <div className="col l2 midDiv hide-on-small-only"></div>
        <div className="col s12 m5 l5 card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={empDirect} alt="empDirect"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Employee Directory<p className="material-icons right activator">⋮</p></span>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Project Description here. 
                <br></br>
                <a className="links" href="https://acerjak.github.io/employeedirectory/">Link to Project</a>
                <br></br>
                <a className="links" href="https://github.com/acerjak/employeedirectory">Link to GitHub Repository</a>
                </p>
            </div>
            </div>
        </div>
        </div>
      </>
    )
}
export default Project