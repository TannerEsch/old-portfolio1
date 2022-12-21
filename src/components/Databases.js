import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function Databases() {
    return ( 
        <div style={{position: "absolute", left: "100px", top: "100px"}}>

      <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'); </style>
      
      <Card style={{ position: "absolute", left: "200px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/Gam6Yht.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>PostgreSQL</Card.Title>
          <Card.Text>
          Free and open-source relational database management system emphasizing extensibility and SQL compliance.
          </Card.Text >
          <Button variant="primary" style={{position: "relative", top: "85px"}}href="https://www.postgresql.org/docs/">See Docs</Button>
        </Card.Body>
      </Card>

      <Card style={{ position: "absolute", left: "550px", width: '300px', height: '470px' }}>
        <Card.Img variant="top" src="https://i.imgur.com/2hOnqzG.jpg"/>
        <Card.Body style={{ position: 'relative', top: "10px" }}>
          <Card.Title style={{ position: 'relative', top: "-25px" }}>MongoDB</Card.Title>
          <Card.Text>
          Document-oriented NoSQL database used for high volume data storage.
          </Card.Text >
          <Button variant="primary" href="https://www.mongodb.com/docs/">See Docs</Button>
        </Card.Body>
      </Card>

      </div>
    );
  }
  
export default Databases;