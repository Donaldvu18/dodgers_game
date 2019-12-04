import React, {useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext'
import Grid from './Grid'
import { optionalCallExpression } from '@babel/types';


const Choices = ({selPlayer}) => {
    const {setOutcome,chosenPlayer} = useContext(RosterContext)

    // const imgurl='../img/team0'+option.teamId+'.jpg'
    const [tog,setTog] =useState(false) 
    const classtest=tog? 'fadeout ':''
    const classgo=classtest + 'option col-3 border border-danger'
    const checkChoice = (player) =>{
        if(player.playerId===chosenPlayer.playerId){
            setOutcome(true);
        }
    }

    return(
        <div className={classgo} onClick={()=> checkChoice(selPlayer)}>{selPlayer.playerName}</div>
    )
}

export default Choices;