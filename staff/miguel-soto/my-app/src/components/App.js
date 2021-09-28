//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Component } from 'react'
import Home from './Home'
import Register from './Register'
import { loggedIn } from '../services/user.service'

//Convierto en componente clase para que sea un componente intelegente React
class App extends Component {

  constructor() {
    super()
    this.state = { loggedIn: loggedIn(), register: false }
    //Bindear metodos
    this.handleLogin = this.handleLogin.bind(this)
    this.handleGoToRegister = this.handleGoToRegister.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }

  //Metodo
  handleLogin() {
    //debugger
    this.setState({ loggedIn: true })
  }

  handleGoToRegister() {
    this.setState({ register: true })
  }

  handleRegister() {
    this.setState({ register: false })
  }

  //Arrow function para bindear y poder usar this
  handleLogout = () => {
    this.setState({ loggedIn: false })
  }

  render() {
    // Enviar parametros a la Home
    // {this.state.loggedIn && <Home name="Pepito" surname="Grillo" />}
    // Si esto no esta y esto no esta = muetra esto <compo>
    const { state: { loggedIn, register }, handleLogin, handleGoToRegister, handleRegister, handleLogout } = this
    return <div className="App">
      {!loggedIn && !register && <Login onLogin={handleLogin} />}
      {!loggedIn && !register && <button onClick={handleGoToRegister}>Register</button>}
      {register && <Register onRegister={handleRegister} />}
      {loggedIn && <Home onLogout={handleLogout} />}
    </div>
  }

}

export default App;
