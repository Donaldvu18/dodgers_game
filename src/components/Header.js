import React, {useContext} from 'react';
import {RosterContext} from '../contexts/RosterContext';


const Header = () => {
    const {chosenPlayer,chosenOptions,status,outcome} = useContext(RosterContext);
//     const date = moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
// console.log(date);

    return (
        <React.Fragment>
        <div className='header pb-1 justify-content-center'>
            {/* <div className='fluid-container'> */}
                <div className='row headerbox'>
                    <div className='col-3 pb-2 headimg'>
                        <img className='img-fluid headimg b-0' src='/img/dodgers3.png' />
                    </div>
                    <div className='col-5'>
                        <div id='topline'>Match the Player</div>
                        <div id='midline'>{chosenPlayer.playerName}</div>
                        <div className=''id='botline'>POS: {chosenPlayer.playerPos}</div>
                
                    </div>
                    <div className='col-3 headimg'>
                        <img className='img-fluid headimg' src='/img/dodgers3.png' />
                    </div>
            {/* </div> */}
          
            </div>
    
        </div>
    
        {outcome ?<div id='statusbarw'><span id='placehold'></span>{status}</div> :
                        <div id='statusbar'><span id='placehold'></span>{status}</div>}

        </React.Fragment>
    );

}

export default Header;