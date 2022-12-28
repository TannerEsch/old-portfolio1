import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Projects() {
    return ( 
        <div style={{position: "absolute", left: "100px", top: "100px"}}>

      <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); </style>
      
      <Card style={{ position: "absolute", left: "200px", width: '300px', height: '470px'}}>
        <Card.Img variant="top" src="https://i.imgur.com/y4s7v7j.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Postman</Card.Title>
          <Card.Text>
          API platform for building and using APIs.
          </Card.Text >
          <Button variant="dark" style={{position: "relative", top: "135px"}} href="https://learning.postman.com/docs/getting-started/introduction/">See Docs</Button>
        </Card.Body>
      </Card>
      <Card style={{ position: "absolute", left: "550px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/OY4HvRU.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>GitBash</Card.Title>
          <Card.Text>
          Command line through which users can use Git features.
          </Card.Text >
          <Button variant="dark" href="https://git-scm.com/doc">See Docs</Button>
        </Card.Body>
      </Card>
      <Card style={{ position: "absolute", left: "900px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/4ix78Eh.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>GitHub</Card.Title>
          <Card.Text>
          Cloud-based Git repository hosting service
          </Card.Text >
          <Button variant="dark" style={{position: "relative", top: "30px"}} href="https://docs.github.com/en">See Docs</Button>
        </Card.Body>
      </Card>
      <Card style={{ position: "absolute", left: "1250px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/1Fb42VY.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>Heroku</Card.Title>
          <Card.Text>
          Cloud platform that lets companies build, deliver, monitor and scale apps
          </Card.Text >
          <Button variant="dark" style={{position: "relative", top: "200px"}} href="https://devcenter.heroku.com/categories/reference">See Docs</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
  



export default Projects;