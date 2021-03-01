import React, { useState } from 'react';

// import styleSheet
import './MainDisplay.css';

// import components
import playerData from '../../fakeData/test_players_auction_rate.json';
import Player from '../Player/Player'
import TeamSummary from '../TeamSummary/TeamSummary';

const MainDisplay = () => {


    const [playerList, setPlayerList] = useState([]);
    const playerAddHandler = (newPlayer) => {
        const newPlayerList = [...playerList, newPlayer];
        setPlayerList(newPlayerList);
    
    }

    return (
        <div className='main row align-item-center'>
            <div className='player-holder col-8'>
                {
                    playerData.map(player => <Player playerAddHandler={() => playerAddHandler(player)} player={player}></Player>)
                }
            </div>
            <div className="team-summary col-3">
                <TeamSummary playerList={playerList}></TeamSummary>
            </div>
        </div>
    );
};

export default MainDisplay;