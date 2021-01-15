import { useState, useEffect } from 'react';
import '../App.css';
import Moment from 'react-moment';
import moment from 'moment';

const Game = ({ game }) => {

  const openSteamPage = (e) => {
    window.open(`http://store.steampowered.com/app/${game.steamAppID}/`);
  }
  
  return (
    <div className="sqr-card store-item" onClick={openSteamPage}>
      <div className="store-img-container">
        <img src={game.thumb} alt='game' className="item-img" />
      </div>
      <div className="store-text-container">
        <span>{game.external}</span>
        <span>Cheapest Price: ${game.cheapest}</span>
      </div>
    </div>
  );
}

export default Game;