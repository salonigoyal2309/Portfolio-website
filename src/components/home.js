/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import saloniCircleImage from '../images/saloniCircle2.png'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import '../styles/page1.css'
import '../styles/style.css'
import '../styles/arrow.css'

const useStyles = makeStyles({
    body:{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        flexDirection: "column",
    }
})

export default function Home(){
    const classes = useStyles()
    return(
        <div id="page1">
          <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
              <Grid container alignItems="center" justify="center" class={classes.body}>
                  <Grid item style={ { padding: 20 } }>
                    <img src={ saloniCircleImage } height = '180vh' width = '180vw' class="avatar"/>
                  </Grid>
                  <Grid item  style={ { padding: 10 } }>
                    <Typography variant={ 'h3' } style={ { color:'#DDD4B5' , fontFamily: 'Varela'} }>
                      SALONI GOYAL
                    </Typography>
                  </Grid>
                  <Grid item  style={ { padding: 5 } }>
                    <Typography variant={ 'h5' } style={ { color:'#ECE9D6' , fontFamily: 'Varela'} }>
                      Software Engineer
                    </Typography>
                  </Grid>
                  <Grid item  style={ { padding: 15 } }>
                    <Typography variant={ 'h5' } style={ { color:'#3F3F3F' , fontFamily: 'Varela'} }>
                      CSE'21 NIT Jaipur
                    </Typography>
                  </Grid>
                  <Grid item>
                    <div class="encircle bounce animated">
                      <div class="arrow"></div>
                    </div>
                  </Grid>
              </Grid>
            </div>
        </div>
    )
} 