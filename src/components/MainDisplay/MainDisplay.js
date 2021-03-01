import React, { useState, useEffect } from 'react';

// import styleSheet
import './MainDisplay.css';

// import components
// import cricketPlayers from '../../fakeData/cricket_players';
import Player from '../Player/Player';
import TeamSummary from '../TeamSummary/TeamSummary';

const MainDisplay = () => {

    const [playerData, setplayerData] = useState([]);
    // fetch data from fakeDate
    useEffect(() => {
        fetch('https://api.mocki.io/v1/55c0e90b')
        .then(res => res.json())
        .then(data => setplayerData(data))
        .catch(err => console.log(err));
    }, []);

    const [playerList, setPlayerList] = useState([]);

    const playerAddHandler = (newPlayer) => {

        if(playerList.includes(newPlayer) === true){
            alert('You have already added!');
        } else {
            const newPlayerList = [...playerList, newPlayer];
            setPlayerList(newPlayerList);
        }

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