import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Projects() {
    return ( 
        <div style={{position: "absolute", left: "100px", top: "100px"}}>

      <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); </style>
      
      <Card style={{ position: "absolute", left: "200px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/xFxi7N2.png"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Hoppy Havoc</Card.Title>
          <Card.Text>
           Flappy-Bird-like game designed using basic Javascript, HTML, and CSS
          </Card.Text >
          <Button variant="primary" href="https://github.com/TannerEsch/Project-1">See Code</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "550px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/TqGVd5r.png"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Generous</Card.Title>
          <Card.Text>
           Philanthropy app designed using MongoDB, React, Express, and Node
          </Card.Text >
          <Button variant="primary" href="https://github.com/TannerEsch/Generous-Frontend">Client</Button>
          <Button variant="primary" href="https://github.com/TannerEsch/Generous-Backend">Server</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "900px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/1HfFafo.png"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>GitFit</Card.Title>
          <Card.Text>
           Health and wellness app designed using PostgreSQL, Express, Node, and Javascript
          </Card.Text >
          <Button variant="primary" style={{position: "relative", top: "-18px"}}href="https://github.com/TannerEsch/GitFit-App">See Code</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "1250px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/NmiWvIz.png"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Spiel</Card.Title>
          <Card.Text>
          Full-Stack social media application designed using the MERN stack
          </Card.Text >
          <Button variant="primary" href="https://github.com/TannerEsch/Spiel-frontend">Client</Button>
          <Button variant="primary" href="https://github.com/TannerEsch/Spiel-backend">Server</Button>
        </Card.Body>
      </Card>

      </div>
    );
  }
  



export default Projects;