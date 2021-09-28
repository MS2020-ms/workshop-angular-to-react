import './Login.css'
import { logino } from '../services/user.service'
import { Component } from 'react'

class Login extends Component {

    state = { error: null }

    //Metodo de la clase como arrow function (hace auto-binding):
    handleSubmit = async (event) => {
        //para que no se recarge pagina con boton submit
        event.preventDefault()

        //destructuring
        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            await logino(email, password)

            this.props.onLogin()

        } catch ({ message }) {
            //alert(error.message)
            //Se actualiza el estado state -> nuevo render
            this.setState({ error: message })
        }

    }
    //Render:
    render() {
        //onSubmit => llamo un callback:
        //return <form className="Login" onSubmit={event=>{
        //event.preventDefault(); 
        //debugger;
        //alert('Hola, Mundo!)}}>

        const { state: { error }, handleSubmit } = this
        return <>
            <h1>Login</h1>
            <form className="Login" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="e-mail" />
                <input type="password" name="password" placeholder="password" />
                <button>LogIn</button>
                {error && <p>{error}</p>}
            </form>
        </>
    }

}

export default Login