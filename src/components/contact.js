import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/style.css';
import { Typography } from '@material-ui/core';
import {SiLinkedin, SiGithub, SiInstagram, SiGmail, SiTwitter} from "react-icons/si";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #DCDCDC 100%, #ff99cc 100%)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  }
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant={'h4'}  style={{ fontFamily: 'Varela' , margin : 40, fontWeight: 'bold'}}>
            Contact
        </Typography>
        <form>
            <label style={{fontWeight:"bold"}}> Name
                <input type="text" name="name" style={{marginLeft: 10 , marginRight: 50, borderRadius: 4}}/>
            </label>
            <label style={{fontWeight:"bold"}}> Email
                <input type="email" name="email" style={{margin: 10, marginRight: 50, borderRadius: 4}}/>
            </label>
            <br/>
            <textarea type="text" name="remarks" placeholder="Anything you want to say" rows="5" cols="40"
                style={{margin: 10, marginRight: 50, borderRadius: 4, border: 'solid'}}/>
            <br />
            <Button variant="outlined" style={{border:'solid'}}>Send</Button>
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
