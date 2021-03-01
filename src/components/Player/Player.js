import React from 'react';


// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import styleSheet
import './Player.css';

const Player = (props) => {

    const { first_name, last_name, auction_rate, image, role, team, date_of_birth, flag} = props.player;
    return (
        <div className="player-card">
            <div className="info-holder">
                <h3>{first_name} {last_name}</h3>
                <hr/>
                <p>Team: {team} <img src={flag} alt='Flag'></img></p>
                <p>Role: {role}</p>
                <p>Date of Birth: {date_of_birth}</p>
                <p>Auction Rate: ₹{auction_rate}</p>
                <button onClick={props.playerAddHandler}> <FontAwesomeIcon icon={faPlus} /> Add to Team</button>
            </div>
            <div className="image-holder">
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Player;