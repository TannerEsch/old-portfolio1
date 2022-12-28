import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import ContactRight from './ConatctRight';
import { Button } from 'react-bootstrap';

export const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6l3j0kk', 'template_cthcym1', form.current, 'Qd2eezK8FvU0CuwnH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (<div style={{fontFamily: "Chivo Mono"}}>
                <style>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@200&display=swap');
</style>

    <StyledContactForm>

    <form ref={form} onSubmit={sendEmail} style={{position:"absolute", top:"300px", left:"300px"}}>
      <label style={{color:"white"}}>Name</label>
      <input type="text" name="user_name" />
      <label style={{color:"white"}} >Email</label>
      <input type="email" name="user_email" />
      <label style={{color:"white"}}>Message</label>
      <textarea name="message" />
      <Button style={{width:"50%", margin:"5px"}} onClick={() => [alert("submitted")]}variant="dark" type="submit" value="Send"> Send</Button>
    </form>

    </StyledContactForm>   
    < ContactRight/>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 500px;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    
  }
`;