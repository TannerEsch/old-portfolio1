import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Projects() {
    return ( 
        <div style={{position: "absolute", left: "100px", top: "50px"}}>

      <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); </style>
      
      <Card style={{ position: "absolute", left: "175px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/4XNqAEX.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>React</Card.Title>
          <Card.Text>
           Javascript library for building user interfaces.
          </Card.Text >
          <Button variant="dark" style={{position: "relative", top: "20px"}}href="https://reactjs.org/">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "500px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/dRDWNpJ.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Bootstrap</Card.Title>
          <Card.Text>
           Open-source CSS framework directed at response, mobile-first front-end web development.
          </Card.Text >
          <Button variant="dark" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", top: "475px", left: "175px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/KhMpD2B.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Django</Card.Title>
          <Card.Text>
          Python-based web framework that allows you to quickly create efficient web applications.
          </Card.Text >
          <Button variant="dark" href="https://docs.djangoproject.com/en/4.1/">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "835px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/praYrXX.png"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Express</Card.Title>
          <Card.Text>
          Backend web application framework for building RESTful API's with Node.js.
          </Card.Text >
          <Button variant="dark" style={{position: "relative", top: "90px"}} href="http://expressjs.com/">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "1170px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/kBgI5Ze.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Flask</Card.Title>
          <Card.Text>
           Flask is a micro-web-framework written in Python.
          </Card.Text >
          <Button variant="dark" style={{position: "relative", bottom: "10px"}} href="https://flask.palletsprojects.com/en/2.2.x/">See Docs</Button>
        </Card.Body>
      </Card>
      <Card style={{ position: "absolute", left: "1500px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/hhrfD2k.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Node</Card.Title>
          <Card.Text>
          Node.js is an open-source server environment.
          </Card.Text >
          <Button variant="dark" style={{position: "relative", top: "120px"}}href="https://nodejs.org/en/docs/">See Docs</Button>
        </Card.Body>
      </Card>
      </div>
    ) 
};


  



export default Projects;