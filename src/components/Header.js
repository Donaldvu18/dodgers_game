import React, {useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext';


const Header = () => {
    const {chosenPlayer,chosenOptions} = useContext(RosterContext);
//     const date = moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
// console.log(date);

    return (
        <div className='header '>
            <div id=''>Match the Player</div>
            <div className='' id=''> 
                <div className=''>
                    <div className=''>{chosenPlayer.playerName}</div>
                </div>
            </div>
            <div className='' id=''> 
                <div className=''>
                    <div className=''>Position:</div>
                </div>
            </div>
            <div id='headerdate'></div>
        </div>
    );

}

export default Header;