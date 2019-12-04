import React, {useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext'
import Grid from './Grid'
import { optionalCallExpression } from '@babel/types';
import image from '../assets/img/player01.jpg'

const Choices = ({selPlayer}) => {
    const {setOutcome,chosenPlayer} = useContext(RosterContext)

    // const imgurl='../img/team0'+option.teamId+'.jpg'
    const [tog,setTog] =useState(false) 
    const classtest=tog? 'fadeout ':''
    const classgo=classtest + 'col-2 choices play'
    const checkChoice = (player) =>{
        if(player.playerId===chosenPlayer.playerId){
            setOutcome(true);
        } else {
            setTog(true)
        }
    }

    return(
        <div className={classgo} id='mybox' onClick={()=> checkChoice(selPlayer)}><div className='image-container'></div>{selPlayer.playerName}</div>
    )
}

export default Choices;