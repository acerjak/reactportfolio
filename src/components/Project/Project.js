import React from 'react'
import BioTwo from './Bio2.0.JPG'
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
            <div className="col s12 m6 l5 card small projDiv">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={BioTwo} alt="BioOne"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">First Portfolio<p className="material-icons right activator">⋮</p></span>
                <p><a className="projectImg" href="https://acerjak.github.io/">Link to Project</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="projectImg" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a></p>
            </div>
        </div>
        <div className="col l2 midDiv hide-on-small-only"></div>
        <div className="col s12 m6 l5 card small projDiv">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Code} alt="BioOne"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Code Quiz<p className="material-icons right activator">⋮</p></span>
                <p><a className="projectImg" href="https://acerjak.github.io/CodeQuiz/">Link to Project</a></p>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>    
                <a className="projectImg" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a></p>
            </div>
            </div>
        </div>
        <div className="row" style={{display: "inline-block"}}>
            <div className="col s12 m6 l5 card small projDiv">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={burger} alt="BioOne"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Burger Game<p className="material-icons right activator">⋮</p></span>
                <p><a className="projectImg" href="https://acerjak.github.io/">Link to Project</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="projectImg" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a></p>
            </div>
        </div>
        <div className="col l2 midDiv hide-on-small-only"></div>
        <div className="col s12 m6 l5 card small projDiv">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={IEQ} alt="BioOne"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">InterviewEQ<p className="material-icons right activator">⋮</p></span>
                <p><a className="projectImg" href="https://acerjak.github.io/">Link to Project</a></p>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>    
                <a className="projectImg" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a></p>
            </div>
            </div>
        </div>
        <div className="row" style={{display: "inline-block"}}>
            <div className="col s12 m6 l5 card small projDiv">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={dealTrack} alt="BioOne"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Deal Tracker<p className="material-icons right activator">⋮</p></span>
                <p><a className="projectImg" href="https://acerjak.github.io/">Link to Project</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Desciption of Project here.
                <br></br>
                <a className="projectImg" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a></p>
            </div>
        </div>
        <div className="col l2 midDiv hide-on-small-only"></div>
        <div className="col s12 m6 l5 card small projDiv">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={empDirect} alt="empDirect"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Employee Directory<p className="material-icons right activator">⋮</p></span>
                <p><a className="projectImg" href="https://acerjak.github.io/employeedirectory/">Link to Project</a></p>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>Project Description here. 
                <br></br>
                <a className="projectImg" href="https://github.com/acerjak/employeedirectory">Link to GitHub Repository</a>
                </p>
            </div>
            </div>
        </div>
        </div>
      </>
    )
}
export default Project