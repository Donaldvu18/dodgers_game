import React,{useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext.js'
import Choices from './Choices.js'
const Grid = () => {

const {chosenPlayer,chosenOptions,outcome} = useContext(RosterContext)




// console.log(chosenPlayer,chosenOptions)

    return(
    
    <div>
    <div className=' d-flex justify-content-around optionrow gridwrap' >
       {outcome ? <div>Ya u did it</div> :<div>
        {chosenOptions.map(player => <Choices selPlayer={player}/>) }
        </div>
       }
        </div>
        </div>
    )
}

export default Grid;