//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Component } from 'react'
import Home from './Home'
import Register from './Register'

//Convierto en componente clase para que sea un componente intelegente React
class App extends Component {

  constructor() {
    super()
    this.state = { loggedIn: false, register: false }
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

  render() {
    return <div className="App">
      {!this.state.loggedIn && !this.state.register && <Login onLogin={this.handleLogin} />}
      {this.state.loggedIn && <Home />}
      {!this.state.loggedIn && !this.state.register && <button onClick={this.handleGoToRegister}>Register</button>}
      {this.state.register && <Register onRegister={this.handleRegister} />}
    </div>
  }

}

export default App;
