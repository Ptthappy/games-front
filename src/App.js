import { useState, useEffect } from 'react';
import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import moment from 'moment';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // localStorage.removeItem('GOOGLE_SESSION')
    console.log('Verify google session');
    let token = JSON.parse(localStorage.getItem('GOOGLE_SESSION'));
    if(token && moment().isBefore(moment(token.tokenObj.expires_at))) setIsLogged(true);
    else localStorage.removeItem('GOOGLE_SESSION');
  }, [])

  const login = async (res) => {
    localStorage.setItem('GOOGLE_SESSION', JSON.stringify(res));
    await fetch(process.env.REACT_APP_BASE_URL + '/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res.profileObj),
        credentials: 'include',
        mode: 'cors'
    });
    setIsLogged(true);
  }

  const logout = () => {
    localStorage.removeItem('GOOGLE_SESSION');
    setIsLogged(false);
  }
  
  return (
    <div className="App">
      {!isLogged && <Login handleLoginChange={login}/>}
      {isLogged && <Dashboard handleLogoutChange={logout}/>}
    </div>
  );
}

export default App;
