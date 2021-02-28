import React from 'react';

const TeamSummary = (props) => {

    const auctionTotal = props.playerList.reduce((total, player)=>{
        return total + player.auction_rate;
    }, 0)
    return (
        <div>
            <h2>Player Selected: {props.playerList.length}</h2>
            <h3>Name of the Players:</h3>
            {
                props.playerList.map(player => <h5>{player.first_name} {player.last_name} .... {player.auction_rate}</h5>)
            }
            <h3>Auction total: {auctionTotal}</h3>

        </div>
    );
};

export default TeamSummary;