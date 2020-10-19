import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../styles/style.css'

import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography
  } from "@material-ui/core";
  
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
  

const useStyles = makeStyles({
    body:{
        backgroundImage: "linear-gradient(to bottom, white 50%, #ff99cc 100%)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    intro:{
        margin: 30,
        textAlign: 'left'
    }
})

export default function Profile(){
    const classes = useStyles()
    return(
        <div class= { classes.body }>
            <Grid container class={ classes.intro }>
                <Grid item lg={12} md={12} sm={12} >
                  <MuiThemeProvider theme={theme}>
                    <Typography variant={'h2'} style={ {marginBottom: 10, color:'black', fontFamily: 'Roboto', fontWeight: 'bold'} }>
                        Hello, I am <span style={{ color:'#fa448c' }} > Saloni Goyal </span>
                    </Typography>
                    <Typography variant={'subtitle1'}>
                        <div>
                            I am a currently pursuing Computer Science and Engineering from National Institute of Technology ,Jaipur.
                        </div>
                        <div>
                            I am a software engineer with passion for web development with good knowledge of MERN stack. 
                        </div>
                        <div>
                            I also have experience with android development and machine learning.
                        </div> 
                        <div>
                            Currently I am trying to contribute to various projects through Open source.
                        </div>
                    </Typography>
                    </MuiThemeProvider>
                </Grid>
                <Grid>
                    <Button id="resume" target="_blank" href="https://drive.google.com/file/d/12GffSaeN6yoBRvAWIUQeuEEsZ-pyDRaj/view?usp=sharing" variant="outlined" style={{borderColor:'#fa448c', marginTop: 20 }}>Resume</Button>
                </Grid>
            </Grid>
        </div>
    )
}