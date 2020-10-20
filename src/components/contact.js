import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/style.css';
import { Typography } from '@material-ui/core';
import {SiLinkedin, SiGithub, SiInstagram, SiGmail, SiTwitter} from "react-icons/si";
import Form from 'react-bootstrap/Form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #DCDCDC 100%, #ff99cc 100%)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  }
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant={'h4'}  style={{ fontFamily: 'Varela' , margin : 40, fontWeight: 'bold'}}>
            Contact
        </Typography>
        <form action='https://formspree.io/f/xbjpoder' method="POST">
            <div style={{margin:10}}>
                <div class="row" >
                    <div class="col-md-3 col-sm-12"></div>
                    <div class="col-md-3 col-sm-5" >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control required name="name" type="text" placeholder="Name" />
                    </Form.Group>
                    </div>
                    <div class="col-md-3 col-sm-5" >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control required name="email" type="email" placeholder="email" />
                    </Form.Group>
                    </div>
                    <div class="col-md-3 col-sm-12"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-12"></div>
                    <div class="col-md-6 col-sm-5" >
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control required name="remarks" as="textarea" rows="3" placeholder="Anything you want to say"/>
                    </Form.Group>
                    </div>
                </div>
            </div>
            <Button type="submit" variant="outlined" style={{border:'solid'}}>Send</Button>
        </form>
        <div style={{backgroundColor:'black', marginTop: 60 , padding: 50}}>
            <a href="https://www.linkedin.com/in/saloni-goyal-085bba180" target="_blank" rel="noopener noreferrer">
                <SiLinkedin id="LinkedIn" color="white" size="1.5em" />
            </a>

            <a href="https://github.com/salonigoyal2309" target="_blank" rel="noopener noreferrer">
                <SiGithub id="Github" color="white" size="1.5em"/>
            </a>
            <a href="https://twitter.com/solo2309" target="_blank" rel="noopener noreferrer">
                <SiTwitter id="Twitter" color="white" size="1.5em"/>
            </a>
            <a href="https://www.instagram.com/saloni_goyal_7/" target="_blank" rel="noopener noreferrer">
                <SiInstagram id="Instagram" color="white" size="1.5em"/>
            </a>
            <a href="mailto: salonigoyal2309@example.com" target="_blank" rel="noopener noreferrer">
                <SiGmail target="_blank" id="Gmail" color="white" size="1.5em"/>
            </a>
            <Typography variant="subtitle1" style={{color: 'white'}}>
                salonigoyal2309@gmail.com
            </Typography>
        </div>
    </div>
  );
}
