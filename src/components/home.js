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
        backgroundColor: '#DBFC00',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default function Home(){
    const classes = useStyles()
    return(
        <Container class={ classes.body }>
            <Grid container spacing={ 1 }>
                <Grid item lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 } >
                  <Typography variant={ 'h1' } style={ { paddingTop: '25%', fontFamily: 'Boogaloo' } }>
                    <TextyAnim mode='random' interval='100'>
                    Hi, I am 
                    SALONI GOYAL
                    </TextyAnim>
                  </Typography>
                </Grid>
            </Grid>
        </Container>
    )
} 