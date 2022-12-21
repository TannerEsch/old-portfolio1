import React from "react";
import AboutRight from "./AboutRight";

 function About() {

    return(
        <div style={{fontFamily: "Chivo Mono"}}>
                <style>@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200&display=swap');</style>
                <div style={{position: "absolute", height: "300vh", width:"5px", top:"0px", backgroundColor: "black", left: "900px"}}>I</div>
            <h1 style={{position: "absolute", fontSize: "70px", top:"0px", left: "375px"}}>About me!</h1>
            <div style={{position: "absolute", width: "500px", fontSize: "35px", top:"200px", left: "360px"}}> 
            I'm a junior Software Engineer currently based in Florida, and looking to move as soon as it's fiscally justifiable. Presently, I'm in college pursuing a degree in Aerospace Engineering.
            </div>
            <AboutRight />
        </div>
        
    )
 };



export default About;