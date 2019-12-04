import React, {useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext';


const Header = () => {
    const {chosenPlayer,chosenOptions} = useContext(RosterContext);
//     const date = moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
// console.log(date);
console.log(chosenPlayer)
    return (
        <div className='header text-center'>
            <div id='guess'>Match the Player</div>
            <div className='container justify-content-center' id='scoreboard'> 
                <div className='row'>
                    <div className='col-4'>{chosenPlayer.playerName}</div>
                </div>
            </div>
            <div className='container justify-content-between' id='locboard'> 
                <div className='row'>
                    <div className='col-4'>Position:</div>
                </div>
            </div>
            <div id='headerdate'></div>
        </div>
    );

}

export default Header;