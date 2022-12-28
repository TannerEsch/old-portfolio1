import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsGithub, BsTwitter, BsClipboard,  BsLinkedin, BsTelephone, BsHouseDoor } from "react-icons/bs";
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {RiFilePaper2Line} from "react-icons/ri"
import {FiPenTool} from "react-icons/fi"


const NavbarVertical = () => {


        
    return (
        <nav style={{ postion: "absolute", backgroundColor: "black", width: "250px", height: "100vh"}}>
            <div style={{position: "absolute", color: "white", left: "85px", top: "300px"}}>
            <a href="https://github.com/TannerEsch">{< BsGithub style={{color: "rgb(194, 194, 219)", width:"25px", height:"25px",}}/>}</a> <a href="https://www.linkedin.com/in/tanner-eschmann/">{< BsLinkedin style={{color: "rgb(194, 194, 219)", width:"25px", height:"25px"}}/>}</a>  <a href="https://twitter.com/broilans">{< BsTwitter style={{color: "rgb(194, 194, 219)", width:"25px", height:"25px"}} />}</a>                  
            </div>
            <div style={{ position: "absolute", color: "rgb(194, 194, 219)", fontSize: "20px", left: "0px", top: "380px"}}>    
            <a href="/"><img src="https://i.imgur.com/kAwto4t.jpg" style={{position: "absolute", top: "-300px", left: "30px", borderRadius: "100px", width: "200px", height: "200px"}}  /></a>
            <Link className="navbar-brand" to="/" style={{paddingTop:"15px", paddingBottom: "15px"}}>{< BsHouseDoor />}Home</Link>  
            <NavLink className="nav-link"  to="/projects" style={{paddingTop:"15px", paddingBottom: "20px"}}>{< AiOutlineFundProjectionScreen />}Projects</NavLink>    
            <Link to="public\files\ATS Resume - Tanner Eschmann.pdf" target="_blank" style={{textDecoration: "none", color: "rgb(194, 194, 219)"}} download>{< RiFilePaper2Line />}Resume</Link>  
            <NavLink className="nav-link"  to="/skills" style={{paddingTop:"25px", paddingBottom: "15px"}}>{< FiPenTool />}skills</NavLink>   
            <NavLink className="nav-link"  to="/about" style={{paddingTop:"15px", paddingBottom: "15px"}}>{< BsClipboard />}About</NavLink> 
            <NavLink className="nav-link"  to="/contact" style={{paddingTop:"15px", paddingBottom: "20px"}}>{< BsTelephone />}Contact</NavLink>   
            </div>   
        </nav>
    );
}


export default NavbarVertical;