import React,{useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext.js'
import Choices from './Choices.js'
const Grid = () => {

const {chosenPlayer,chosenOptions,outcome} = useContext(RosterContext)




// console.log(chosenPlayer,chosenOptions)

    return(
    
  
    <div className='d-flex bg-danger' >
       {outcome ? <div>Ya u did it</div> :
       (<div className='container my-container'>
           <div className='row my-row justify-content-around'>
           <Choices selPlayer={chosenOptions[0]}/>
           <Choices selPlayer={chosenOptions[1]}/>
           <Choices selPlayer={chosenOptions[2]}/>
           </div>
            <div className='row mt-4 my-row justify-content-around'>
           <Choices selPlayer={chosenOptions[3]}/>
           <Choices selPlayer={chosenOptions[4]}/>
           <Choices selPlayer={chosenOptions[5]}/>
            </div>
            
       </div>)
        // (chosenOptions.map(player => <Choices selPlayer={player}/>))
       }
    
        </div>
    
    )
}

export default Grid;