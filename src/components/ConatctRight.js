import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGithub, BsLinkedin, TfiEmail, BsTelephoneFill  } from "react-icons/bs";


function ContactRight() {
    return ( <div>

   
        <h1 style={{position: "absolute", top:"200px", left: "420px"}}>Contact Me!</h1>
        <h1 style={{position: "absolute", top:"200px", left: "1000px"}}>Check out my other Links</h1>
        <div style={{position: "absolute", height: "300vh", width:"5px", top:"0px", backgroundColor: "black", left: "900px"}}>I</div>
     <div style={{position: "absolute", fontSize: "50px", height: "100px", top: "400px", left: "1000px"}}>
        <a href="https://github.com/TannerEsch" style={{textDecoration: "none"}}>{< BsGithub />}GitHub</a>
        <br/>  
        <a href="https://www.linkedin.com/in/tanner-eschmann/" style={{textDecoration: "none"}}>{< BsLinkedin />}LinkedIn</a>
        <br/> 
         ✉ eschmannEnterprises@gmail.com
         <br/> 
        < BsTelephoneFill /> 772-766-2918
      </div> 
      </div>
    );
  }
  
export default ContactRight;