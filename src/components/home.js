import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextyAnim from 'rc-texty'
import Button from  '@material-ui/core/Button'
import '../styles/style.css'

const useStyles = makeStyles({
    body:{
        overflowX: 'hidden',
        backgroundColor: '#DBFC00',
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
        <Container class={ classes.body }>
            <Grid container alignItems="center" justify="center" spacing={ 3 } >
                <Grid item lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 } >
                  <Typography variant={ 'h1' } style={ { fontFamily: 'Boogaloo'} }>
                    <TextyAnim mode='random' interval='100'>
                    Hi, I am 
                    SALONI GOYAL :)
                    </TextyAnim>
                  </Typography>
                </Grid>
                <Grid item lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 } >
                    <Button href="#profile" variant="outlined" style={ { backgroundColor:'black', borderRadius:50, color:'#DBFC00' } }>MORE INFO</Button>
                </Grid>
            </Grid>
        </Container>
    )
} 