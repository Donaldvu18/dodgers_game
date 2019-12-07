import React,{useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext.js'
import Choices from './Choices.js'

const Grid = () => {

const {chosenPlayer,chosenOptions,outcome,setOutcome} = useContext(RosterContext)


    const resetGame = ()=>{
        // setOutcome(!outcome);
        window.location.reload(true);
    }

// console.log(chosenPlayer,chosenOptions)

    return(
    
  
    <div className='supcontainer' >
       {outcome ? <div className='container justify-content-center'>
           <img className='mt-4 congrats' src='/img/dodgers_congrats.jpg'/><br/>
           <button className='mt-3 mb-3 btn btn-primary btn-lg' id='mybtn' onClick={resetGame}>Play Again?</button>
       </div> :
       (<div className='container mt-0 my-container'>
           <div className='row my-row justify-content-around'>
           <Choices selPlayer={chosenOptions[0]}/>
           <Choices selPlayer={chosenOptions[1]}/>
           <Choices selPlayer={chosenOptions[2]}/>
 
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