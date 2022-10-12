import React from "react";
import './Projects.css';
import axios from 'axios';



function Projects() {
    

    return(
        <div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
</style>
            <p className = "head"> Projects </p>
            <div className = "proyectos">
                
                <div className = "box1"><a href = "https://github.com/TannerEsch/Project-1" className = "project1" >Project 1</a></div>
                <div className = 'box2'><a href = "https://github.com/TannerEsch/GitFit-App" className = "project2">Project 2</a></div>
            </div>
        </div>
    )
 };



export default Projects;