import { useState, useEffect } from 'react';
import '../App.css';
import Moment from 'react-moment';
import moment from 'moment';

const Deal = ({ deal }) => {

  const openSteamPage = (e) => {
    window.open(`http://store.steampowered.com/app/${deal.steamAppID}/`);
  }
  
  return (
    <div className="sqr-card store-item-big" onClick={openSteamPage}>
      <div className="store-img-container">
        <img src={deal.thumb} alt='deal' className="item-img" />
      </div>
      <div className="store-text-container">
        <span>{deal.title}</span>
        <span>Normal Price: <span style={{ textDecoration: 'line-through' }}>${deal.normalPrice}</span></span>
        <span>Sale Price: <span style={{ color: '#00bf00' }}>${deal.salePrice}</span></span>
      </div>
    </div>
  );
}

export default Deal;