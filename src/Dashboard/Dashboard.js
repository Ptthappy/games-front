import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';

const Dashboard = ({ handleLogoutChange }) => {
  
  const successLogout = () => {
    handleLogoutChange();
  }
  return (
    <div className="container">
      <div className="card" style={{ width: '100%' }}>
        <Tabs>
          <Tab title="Todos los Juegos">
            Lemon is yellow
            </Tab>
          <Tab title="Juegos en Oferta">
            Strawberry is red
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
