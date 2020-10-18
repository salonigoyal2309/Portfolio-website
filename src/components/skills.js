import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from '@material-ui/core/Button';
import skillSet from '../data/skills.json';
import '../styles/style.css';

const useStyles = makeStyles({
    body:{
        backgroundImage: "linear-gradient(to bottom, white 100%, #ff99cc 100%)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default function Skills(){

    const classes = useStyles();
    const [skillSetName, setSkillSetName] = useState('All');

    let progressBarSkills = [];
    for(let i=0;i<skillSet.length;i++){
        if(skillSetName === "All" || skillSetName === skillSet[i].skillSet)
            progressBarSkills.push( <ProgressBar id={skillSet[i].skillSet} label={skillSet[i].skillName} max="10" now={skillSet[i].now} /> );
    }

    return(
        <div class= { classes.body }>
            <Button variant="outlined" id="all" onClick={()=>setSkillSetName('All')} >All</Button>
            <Button variant="outlined" id="databases" onClick={()=>setSkillSetName('Databases')}>Databases</Button>
            <Button variant="outlined" id="frameworks" onClick={()=>setSkillSetName('Frameworks')}>Frameworks</Button>
            <Button variant="outlined" id="languages" onClick={()=>setSkillSetName('Languages')}>Languages</Button>
            <Button variant="outlined" id="tools" onClick={()=>setSkillSetName('Tools')}>Tools</Button>
           {progressBarSkills}
        </div>
    )
}