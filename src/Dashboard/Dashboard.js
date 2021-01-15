import React, { useState, useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import Game from '../components/Game';
import Deal from '../components/Deal';

const Dashboard = ({ handleLogoutChange }) => {
  const [games, setGames] = useState([]);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getGames() {
      let response = await fetch(process.env.REACT_APP_BASE_URL + '/games')
      response = await response.json()
      setGames(response);
    }

    async function getDeals() {
      let response = await fetch(process.env.REACT_APP_BASE_URL + '/deals')
      response = await response.json()
      setDeals(response);
    }

    try {
      getGames();
      getDeals();
    } catch(e) {
      console.log(e);
    }
  }, [])
  
  const successLogout = () => {
    handleLogoutChange();
  }
  return (
    <div className="container" style={{ overflowY: 'hidden' }}>
      <div className="card" style={{ width: '100%', marginBottom: '15px', flex: '1 auto', overflow: 'auto' }}>
        <Tabs>
          <Tab title="Todos los Juegos">
            <div className="sqr-card-container">
              {games.map((g, key) =>
                <Game key={key} game={g} />
              )}
            </div>
            </Tab>
          <Tab title="Ofertas">
            <div className="sqr-card-container">
              {deals.map((d, key) =>
                <Deal key={key} deal={d} />
              )}
            </div>
          </Tab>
        </Tabs>
      </div>
      <div>
      <GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Sign Out"
        onLogoutSuccess={successLogout}
      />
      </div>
    </div>
  );
}

export default Dashboard;
