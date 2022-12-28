import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function Home(props) {

    return(  
        <div className="myName" style={{fontFamily:"Chivo Mono"}}>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200&display=swap');
</style>
            Tanner Eschmann
            <div>
                <h1> Full-Stack Engineer </h1>

                </div>
                <Link class="nav-link active" to="/contact"><Button variant="dark" style={{position: "relative", top: "30px"}}> Contact Me</Button></Link>

        </div>
    )
 };


export default Home;