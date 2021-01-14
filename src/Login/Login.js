import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import '../App.css';

const Login = ({ handleLoginChange }) => {
  
  const successLogin = (res) => {
    console.log(res);
    if(!res.error) {
      handleLoginChange(res);
    }
  }

  const failureLogin = (res) => {
    console.log(res)
  }
  
  return (
    <div className="container" style={{ 'justifyContent': 'center' }}>
      <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
        <h1 style={{ alignSelf: 'center', marginBottom: '8px' }}>Bienvenido a CheapShark</h1>
        <span>Inicie sesión con google para realizar búsquedas en un catálogo de juegos y ofertas</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '36px' }}>
          <GoogleLogin
            clientId="363111786205-om8gg8ebfff1tj12hie26gg3ds72agki.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={successLogin}
            onFailure={failureLogin}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
