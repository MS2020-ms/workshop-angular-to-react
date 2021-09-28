//import logo from './logo.svg';
import './App.css';
import Login from '../components/Login';
import { useState } from 'react'
import Home from '../components/Home'
import Register from '../components/Register'
import { loggedIn as _loggedIn } from '../services/user.service'

//Hooks = useState
function App() {

  const [loggedIn, setLoggedIn] = useState(_loggedIn())
  const [register, setRegister] = useState(false)

  //Arrow function para bindear y poder usar this
  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleGoToRegister = () => {
    setRegister(true)
  }

  const handleRegister = () => {
    setRegister(false)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return <div className="App">
    {!loggedIn && !register && <Login onLogin={handleLogin} />}
    {!loggedIn && !register && <button onClick={handleGoToRegister}>Register</button>}
    {register && <Register onRegister={handleRegister} />}
    {loggedIn && <Home onLogout={handleLogout} />}
  </div>

}

export default App;
