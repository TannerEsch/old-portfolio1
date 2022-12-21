import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsGithub, BsTwitter,  BsLinkedin, BsTelephoneFill, BsFillCollectionFill, BsFillHouseFill, BsFillSave2Fill, BsWrench, BsFillPersonFill  } from "react-icons/bs";

const NavbarVertical = () => {


        
    return (
        <nav style={{ postion: "absolute", backgroundColor: "black", width: "250px", height: "100vh"}}>
            <div style={{position: "absolute", color: "white", left: "100px", top: "300px"}}>
            <a href="https://github.com/TannerEsch">{< BsGithub />}</a>   <a href="https://www.linkedin.com/in/tanner-eschmann/">{< BsLinkedin />}</a>  <a href="https://twitter.com/broilans">{< BsTwitter />}</a>                   
            </div>
            <div style={{ position: "absolute", color: "rgb(194, 194, 219)", fontSize: "35px", left: "60px", top: "380px"}}>    
            <a href="/"><img src="https://i.imgur.com/kAwto4t.jpg" style={{position: "absolute", top: "-300px", right: "-10px", borderRadius: "100px", width: "200px", height: "200px"}}  /></a>
            <Link className="navbar-brand" to="/" >{< BsFillHouseFill />}Home</Link>
            <NavLink className="nav-link"  to="/about">{< BsFillCollectionFill />}About</NavLink>
            <NavLink className="nav-link"  to="/contact">{< BsTelephoneFill />}Contact</NavLink>      
            <NavLink className="nav-link"  to="/projects">{< BsWrench />}Projects</NavLink>    
            <a href="https://docs.google.com/document/d/1TgAYitg4LfL_QoXdsUQXS2ApJdKWDs9KgtT1DwlJq8w/edit" style={{textDecoration:"None", color: "rgb(194, 194, 219)" }}> {< BsFillSave2Fill />}Resume</a>  
            <NavLink className="nav-link"  to="/skills">{< BsFillPersonFill />}skills</NavLink>   
            </div>                   
        </nav>
    );
}


export default NavbarVertical;