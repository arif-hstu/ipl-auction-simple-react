import React from 'react';

// import styleSheet
import './Player.css'

const Player = (props) => {

    const {first_name, last_name, auction_rate} = props.player;
    return (
        <div className="player-card">
            <h3>Name: {first_name} {last_name}</h3>
            <h5>Auction Rate:{auction_rate}</h5>
            <button onClick={props.playerAddHandler}>Add to Team</button>
        </div>
    );
};

export default Player;