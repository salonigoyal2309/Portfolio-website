import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './card.js';
import openSource from '../images/openSource.jpg';
import shop from '../images/shop.jpg';
import attendance from '../images/attendance.png';
import stationary from '../images/stationary.jpg';
import codeInfo from '../images/codeInfo.jpg';
import creduitCardFraud from '../images/creditCard.jpg';
import '../styles/style.css';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: 'auto',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  cardsDisplay:{
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'column wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant={'h3'}  style={{ fontFamily: 'Varela' , margin : 40}}>
            Projects
        </Typography>
        <div className={classes.cardsDisplay}>
            <Cards 
                imagePath={openSource} 
                title="Open Source" 
                description="View my open source projects"
                url="https://github.com/salonigoyal2309" />
            <Cards 
                imagePath={shop} 
                title="SHOP" 
                description="Shopping website made using MERN stack" 
                url="https://github.com/salonigoyal2309/shopping-website"/>
            <Cards 
                imagePath={attendance} 
                title="Attendance management system" 
                description="Portal for taking attendance online " 
                url="https://github.com/salonigoyal2309/SE-project"/>
            <Cards 
                imagePath={stationary} 
                title="MyNE" 
                description="My NIT E-stationary website" 
                url="https://github.com/salonigoyal2309/MyNE"/>
            <Cards 
                imagePath={codeInfo} 
                title="CodeInfo" 
                description="App that shows upcoming coding contests" 
                url="https://github.com/salonigoyal2309/codeINFO-app"/>
            <Cards 
                imagePath={creduitCardFraud} 
                title="Credit Card Fraud detection" 
                description="Designed model to detect credit card frauds" 
                url="https://github.com/salonigoyal2309/CNS-Project"/>
        </div>
    </div>
  );
}
