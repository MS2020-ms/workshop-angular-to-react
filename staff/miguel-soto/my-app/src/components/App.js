//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useState } from 'react'
import Home from './Home'
import Register from './Register'
import { loggedIn } from '../services/user.service'

//Hooks = useState
function App() {

  const [view, setView] = useState(loggedIn() ? 'home' : 'login')

  //Arrow function para bindear y poder usar this
  const handleGoToHome = () => {
    setView('home')
  }

  const handleGoToRegister = () => {
    setView('register')
  }

  const handleGoToLogin = () => {
    setView('login')
  }

  return <div className="App">
    {view === 'login' && < Login onLogin={handleGoToHome} />}
    {view === 'login' && < button onClick={handleGoToRegister}>Register</button>
    }
    {view === 'register' && < Register onRegister={handleGoToRegister} />}
    {view === 'home' && < Home onLogout={handleGoToLogin} />}
  </div >

}

export default App;
