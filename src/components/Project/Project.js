import React from 'react'
import Responsive from './ResponsiveBio.JPG'
import Code from './codeQuiz.JPG'
import burger from './burger.JPG'
import dealTrack from './dealTracker.JPG'
import IEQ from './InterviewEQ.png'
import empDirect from './empDirectory.JPG'
import './Project.css'

const Project = () => {
    return (
        <>
        <div className="projectContainer">
        <div className="row" style={{display: "inline-block"}}>
            <div className="col s12 m6 l4 card">
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
        <div className="col s12 m6 l4 card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Code} alt="Code"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Code Quiz<p className="material-icons right activator">⋮</p></span>
                
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>This was a homework assignment for the UCI coding bootcamp. We were asked to create a short web development based quiz utilizing JavaScript for front-end functionality. 
                    I watched a lot of tutorials to complete this project but love to reflect on how much I have accomplished with learning coding in just three short months.
                <br></br>
                <a className="links" href="https://acerjak.github.io/CodeQuiz/">Link to Project</a>  
                <br></br>
                <a className="links" href="https://github.com/acerjak/CodeQuiz">Link to GitHub Repository</a>
                </p>
            </div>
            </div>
            <div className="col s12 m6 l4 card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img onClick={ (e)=>{alert("NOMNOMNOM!")}} className="activator" src={burger} alt="burger"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><p className="material-icons right activator">⋮</p>Burger Game</span>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>This was another homework assignment for UCI coding bootcamp. The focus here was utilizing a MySQL database to ADD a burger and UPDATE a burger to a database deployed through Heroku. 
                    I started to gain more confidence in my coding after this project, which was extremely useful during Project Two.
                <br></br>
                <a className="links" href="https://glacial-springs-08945.herokuapp.com/">Link to Project</a>
                <br></br>
                <a className="links" href="https://github.com/acerjak/burger">Link to GitHub Repository</a>
                </p>
            </div>
        </div>
        <div className="col s12 m6 l4 card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={IEQ} alt="IEQ"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">InterviewEQ<p className="material-icons right activator">⋮</p></span>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>This was my first project during the course of UCI's coding bootcamp. I helped on both the front and back end of this project. HTML, CSS and Materialize were used for the front-end. JavaScript, Express Node Server and JQuery were used for the back-end. We utilized two API's: Mozilla WebSpeech and Parallel Dots Emotion Analysis to take the speech of the user and analyze their emotions. 
                    The emotions were then rendered at the bottom of the application showing the text of the speech and the emotions tied to it.
                <br></br>
                <a className="links" href="https://maximilliancharlemagne.github.io/emotion-engine/index">Link to Project</a>   
                <br></br>
                <a className="links" href="https://github.com/maximilliancharlemagne/emotion-engine">Link to GitHub Repository</a>
                </p>
            </div>
            </div>
            <div className="col s12 m6 l4 card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={dealTrack} alt="dealTrack"/>
                </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><p className="material-icons right activator">⋮</p>Deal Tracker</span>
                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>This was one of my favorite projects during UCI's coding bootcamp. I was mostly responsbile for the back end development: Node Express Server, MySQL database with Sequelize, and Javascript. We utilized Fomantic for our styling library. 
                    This application's focus was on how to help keep a sales person keep track of their ongoing deals in a type of tracker. This sales person would be able to add a new deal at any stage provided, but also could drag and drop to a new stage at any time.
                    The authentication is where we hope to improve this application since the routes are not properly locked, which we recently learned can be done with Passport.
                <br></br>
                <a className="links" href="https://deal-tracker-app.herokuapp.com/index.html">Link to Project</a>
                <br></br>
                <a className="links" href="https://github.com/Logan96M/Deal_Tracker">Link to GitHub Repository</a>
                </p>
            </div>
        </div>
        <div className="col s12 m6 l4 card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={empDirect} alt="empDirect"/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">Employee Directory<p className="material-icons right activator">⋮</p></span>
            </div>
             <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 right">X</span>
                <p>This was my first homework using ReactJS. I have only had about a week of experience working with it so far but already love it! I can't wait to learn more and build out this application even more. 
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