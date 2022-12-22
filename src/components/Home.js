import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button';


function Home() {

    return(  
        <div className="myName" style={{fontFamily:"Chivo Mono"}}>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200&display=swap');
</style>
            Tanner Eschmann
            <div>
                <h1> Full-Stack Engineer </h1>

                </div>
                <Button variant="info" style={{position: "relative", top: "30px"}} href="/contact">Contact Me</Button>

        </div>
    )
 };


export default Home;