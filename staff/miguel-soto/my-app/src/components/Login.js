import './Login.css'
import { logino } from '../services/user.service'
import { useState } from 'react'

//Hooks = useState
//recibo las props con destructuring
function Login({ onLogin }) {

    const [error, setError] = useState()

    //Metodo de la clase como arrow function (hace auto-binding):
    const handleSubmit = async (event) => {
        //para que no se recarge pagina con boton submit
        event.preventDefault()

        //destructuring
        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            await logino(email, password)

            onLogin()

        } catch ({ message }) {
            //alert(error.message)
            //Se actualiza el estado state -> nuevo render
            setError(message)
        }
    }


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

export default Login