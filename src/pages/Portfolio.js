
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import scheduler from "../style/imgs/challenge5.scheduler.PNG";
import weather from "../style/imgs/challenge6.weather.PNG";
import nosql from "../style/imgs/nosql.PNG";
import notes from "../style/imgs/notes.png";
import tctgy from "../style/imgs/tctgy.PNG";
import profiles from "../style/imgs/profiles.png"
import "../style/Portfolio.css"


export default function Portfolio() {

  return (
    
    <Container className="layout">
     
    <Card style={{ width: '50rem'  }}>
    <Row className="justify-content-md-center">
    <Col xs={6}>
    <Card.Img variant="top" src={scheduler}  />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <Card.Body className="example">
      <Card.Title>Work Day Scheduler</Card.Title>
      
      <Card.Text>
        An online scheduling application to allow the user to plan their work days.
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/kiriludp/Challenge-Five_Scheduler">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    <Col xs={6}>
    <Card.Img variant="top" src={weather}  />
    <Card.Body className="example">
      <Card.Title>Weather Application</Card.Title>
      <Card.Text>
        A web application for searching and saving the five day weather forecast for various cities. 
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/kiriludp/Challenge-Six_WeatherApp">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    </Row>
    <Row className="justify-content-md-center">
    <Col xs={6}>
    <Card.Img variant="top" src={nosql}   />
    <Card.Body className="example">
      <Card.Title>NoSQL CRUD Application</Card.Title>
      <Card.Text>
        A NoSql CLI generated app with full CRUD function and built with MongooseDB
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/kiriludp/Challenge-Eighteen_NoSqlAPI">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    <Col xs={6}>
    <Card.Img variant="top" src={notes}   />
    <Card.Body className="example">
      <Card.Title>Web App Notes</Card.Title>
      <Card.Text>
        A note taking app for users to store their To Dos or other reminders.
      </Card.Text>
      <Button variant="primary" id="link" href="https://github.com/kiriludp/Challenge-Eleven_NoteTaker">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    </Row>
    <Row className="justify-content-md-center">
    <Col xs={6}>
    <Card.Img variant="top" src={tctgy}  />
    <Card.Body className="example" >
      <Card.Title>They're Coming to Get You</Card.Title>
      <Card.Text>
        A Horror themed, text based, create-your-own-adventure game with a variety of endings based on the users decisions. Multiple endings can be reached through the story tree.
      </Card.Text>
      <Button variant="primary"  id="link" href="https://github.com/kiriludp/front-end-Horror">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    
    <Col xs={6}>
    <Card.Img variant="top" src={profiles}  />
    <Card.Body className="example" >
      <Card.Title>Team Profiles</Card.Title>
      <Card.Text>
        A Command Line application to generate a webpage that displays a manager's team information
      </Card.Text>
      <Button variant="primary"  id="link" href="https://github.com/kiriludp/Challenge-Ten_Profiles">Visit GitHub Repo</Button>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  </Container>
);
}