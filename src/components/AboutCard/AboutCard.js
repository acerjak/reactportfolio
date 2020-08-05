import React from 'react'
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize'
import Me from './IMG_0540.JPG'
import './AboutCard.css'

const AboutCard = () => {
    return (
      <>
        <Row>
            <Col
              l={6}
              m={6}
              s={12}
            >
              <Card
              className="aboutItem hoverable"
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={Me} />}
                horizontal
              >
              <p className="aboutParagraph">My name is Amanda Cerjak (pronounced Sir-Jack) and this is my first portfolio created with ReactJS! I am a recent graduate from University of California, Irvine's Coding Bootcamp for Web Development. I also have my Bachelor's degree from California State University of Fullerton in Biological Science and minor in Chemistry. I would describe myself as an eager and enthusiastic professional looking to get my foot in the door as a junior developer and learn more about the industry of computer science. 
       <br></br>
       <br></br>
       If you would like to know more, I would love to connect with you on social media. My main accounts are linked below or simply see the Contact page for more information.</p>
              </Card>
            </Col>
        </Row>
      </>
    )
}

export default AboutCard



// <div className="row">
// <div className="col m4 l4"></div>
// <div className="col s12 m4 l4 aboutCard">
//   <div className="card hoverable teal lighten-2">
//     <div className="card-image">
//       <img src={Me} alt="me" className="responsive-img aboutImg"/>
//       <span className="card-title">About Me</span>
//     </div>
//     <div className="card-content">
//     <p onClick={ (e)=>{alert("You found the first easter egg!")}}>
//       My name is Amanda Cerjak (pronounced Sir-Jack) and this is my first portfolio created with ReactJS! I am a recent graduate from University of California, Irvine's Coding Bootcamp for Web Development. I also have my Bachelor's degree from California State University of Fullerton in Biological Science and minor in Chemistry. I would describe myself as an eager and enthusiastic professional looking to get my foot in the door as a junior developer and learn more about the industry of computer science. 
//       <br></br>
//       <br></br>
//       If you would like to know more, I would love to connect with you on social media. My main accounts are linked below or simply see the Contact page for more information.</p>
//     </div>
//   </div>
// </div>
// <div className="col m4 l4"></div>
// </div>