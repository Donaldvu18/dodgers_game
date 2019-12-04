import React,{useState,useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext.js'
import Choices from './Choices.js'

const Grid = () => {

const {chosenPlayer,chosenOptions,outcome,setOutcome} = useContext(RosterContext)


    const resetGame = ()=>{
        window.location.reload(true);
    }

// console.log(chosenPlayer,chosenOptions)

    return(
    
  
    <div className='' >
       {outcome ? <div className='container justify-content-center'>
           <div><img className='mt-3 congrats' src='/img/congrats.jpg'/></div><br/>
           <button className='mb-3 btn btn-primary' onClick={resetGame}>Play Again?</button>
       </div> :
       (<div className='container mt-3 my-container'>
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