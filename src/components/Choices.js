import React, {useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext'
import Grid from './Grid'
import { optionalCallExpression } from '@babel/types';
// import image from '../assets/img/player01.jpg'

const Choices = ({selPlayer}) => {
    const {setOutcome,chosenPlayer,status,setStatus} = useContext(RosterContext)

    // const imgurl='../img/team0'+option.teamId+'.jpg'
    const [tog,setTog] =useState(false) 
    const classtest=tog? 'fadeout ':''
    const classgo=classtest + 'col-3'
    const checkChoice = (player) =>{
        if(player.playerId===chosenPlayer.playerId){
            setOutcome(true);
            setStatus('')
        } else {
            setTog(true)
            setStatus(status ? status+"!":'Incorrect');
        }
    }
    let imgurl='/img/player0'+selPlayer.playerId+'.jpg'
    return(<div className={classgo} onClick={()=> checkChoice(selPlayer)}>
        <img className='choices' src={imgurl} /></div>
        // <div className={classgo} id='mybox' ><div className='image-container'></div>{selPlayer.playerName}</div>
    )
}
export default Choices;