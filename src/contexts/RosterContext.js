import React, {createContext,useEffect,useState} from 'react';
import roster from '../assets/roster.js'

export const RosterContext = createContext();
// const rosterlist = require('../assets/roster.js')

const RosterContextProvider = (props) => {

// Choosing  player to guess and setting into state
const randomPlayer = roster[Math.floor(Math.random()*roster.length)]

const [chosenPlayer,setChosenPlayer]=useState(randomPlayer)

// Choosing 5 other players to include as choices and setting in state
const cleanRoster=roster.filter(player =>player.playerId !==chosenPlayer.playerId)

const randomChoices=[chosenPlayer]

for (let i = 0; i < 5; i++){
    let randInt=Math.floor(Math.random()*cleanRoster.length)
    randomChoices.push(cleanRoster[randInt])
    cleanRoster.splice(randInt,1)
}
randomChoices.sort(() => Math.random() - 0.5);

const [chosenOptions,setChosenOptions] = useState(randomChoices)

// Initializing outcome to use for deciding whether or not to display winner page or choice boxes

const [outcome,setOutcome]=useState(false)

// Initializing status to use in header for incorrect choice feedback

const [status,setStatus]=useState('')
    return(
        <RosterContext.Provider value={{outcome,setOutcome,chosenPlayer,chosenOptions,status,setStatus}}>
            {props.children}
        </RosterContext.Provider>
    )

 }

export default RosterContextProvider;