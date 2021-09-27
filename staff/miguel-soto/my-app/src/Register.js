import './Register.css'
import { registero } from './user.service'
import { Component } from 'react'

class Register extends Component {
    constructor() {
        super()
        this.state = { error: null }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    //Metodo de la clase:
    handleSubmit(event) {
        //para que no se recarge pagina
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registero(name, email, password)
                //Guardo mi token en sessionStorage
                .then(() => { this.props.onRegister() })
                //Para manejar errores asincronos que vienen de la api
                .catch(({ message }) => {
                    this.setState({ error: message })
                })
        } catch ({ message }) {
            //alert(error.message)
            //Se actualiza el estado state -> nuevo render
            this.setState({ error: message })
        }

    }
    //Render:
    render() {
        return <form className="Login" onSubmit={this.handleSubmit}>
            <p>Register:</p>
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Register</button>
            {this.state.error && <p>{this.state.error}</p>}
        </form>
    }

}

export default Register