// GameCard.js
import React, {useEffect, useState} from 'react';
import axios from "axios";

const GameCard = ({ game }) => {
    return (


        <div className='row m-3'>
            <div className="card col-sm-12">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="team-info text-center">
                        <img className="team-logo" src={game.away.logos[0]} alt="Away Team Logo" />
                        <h5 className="team-name">{game.away.abbreviation}</h5>
                    </div>
                    <div className="vs">vs</div>
                    <div className="team-info text-center">
                        <img className="team-logo" src={game.home.logos[0]} alt="Home Team Logo" />
                        <h5 className="team-name">{game.home.abbreviation}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
