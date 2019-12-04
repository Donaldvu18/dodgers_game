import React, {useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext';


const Header = () => {
    const {chosenPlayer,chosenOptions,status} = useContext(RosterContext);
//     const date = moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
// console.log(date);

    return (
        <div className='header pb-1'>
            <div id='topline'>Match the Player</div>
            <div id='midline'>{chosenPlayer.playerName}</div>
            <div id='botline'>{chosenPlayer.playerPos}</div>
            <div id='statusbar'><span id='placehold'></span>{status}</div>
        </div>
    );

}

export default Header;