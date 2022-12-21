import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Projects() {
    return ( 
        <div style={{position: "absolute", left: "100px", top: "100px"}}>

      <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); </style>
      
      <Card style={{ position: "absolute", left: "175px", width: '300px', height: '470px' }}>
                <Card.Img variant="top" src="https://i.imgur.com/OeLAJMV.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Python</Card.Title>
          <Card.Text>
           Flappy-Bird-like game designed using basic Javascript, HTML, and CSS
          </Card.Text >
          <Button variant="primary" href="https://docs.python.org/3/">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "500px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/TqGVd5r.png"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Javascript</Card.Title>
          <Card.Text>
           Philanthropy app designed using MongoDB, React, Express, and Node
          </Card.Text >
          <Button variant="primary" href="https://javascript.info/document">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "835px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/nDHfNgX.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>HTML 5</Card.Title>
          <Card.Text>
           Health and wellness app designed using PostgreSQL, Express, Node, and Javascript
          </Card.Text >
          <Button variant="primary" style={{position: "relative", top: "60px"}}href="https://developer.mozilla.org/en-US/docs/Web/HTML">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "1170px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/jq9xQUB.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>CSS 6</Card.Title>
          <Card.Text>
          Full-Stack social media application designed using the MERN stack
          </Card.Text >
          <Button variant="primary" style={{position: "relative", top: "100px"}} href="https://developer.mozilla.org/en-US/docs/Web/CSS">See Docs</Button>
      
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "1500px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/PiK5UXH.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>SQL</Card.Title>
          <Card.Text>
          Data management language used to handle data in relational databases.
          </Card.Text >
          <Button variant="primary" style={{position: "relative", top: "125px"}} href="https://www.geeksforgeeks.org/what-is-sql/">Learn More</Button>
      
        </Card.Body>
      </Card>
      </div>
      )
};
    


export default Projects;