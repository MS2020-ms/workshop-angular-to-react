import './Register.css'
import { registero } from '../services/user.service'
import { Component } from 'react'

class Register extends Component {

    state = { error: null }

    //Metodo de la clase:
    handleSubmit = async event => {
        //para que no se recarge pagina
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            await registero(name, email, password)
            //Guardo mi token en sessionStorage
            this.props.onRegister()
        } catch ({ message }) {
            //alert(error.message)
            //Se actualiza el estado state -> nuevo render
            this.setState({ error: message })
        }

    }
    //Render:
    render() {
        const { state: { error }, handleSubmit } = this

        return <>
            <h1>Register:</h1>
            <form className="Login" onSubmit={handleSubmit}>
                <p>Register:</p>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="e-mail" />
                <input type="password" name="password" placeholder="password" />
                <button>Register</button>
                {error && <p>{error}</p>}
            </form>
        </>
    }

}

export default Register