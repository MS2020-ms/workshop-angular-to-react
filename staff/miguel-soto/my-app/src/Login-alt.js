import './Login.css'
import { logino } from './user.service'

function Login() {

    //Logica:
    function handleSubmit(event) {
        //para que no se recarge pagina
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            logino(email, password);
        } catch (error) {
            alert(error.message)
        }

    }
    //Template:
    return <form className="Login" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="password" />
        <button>LogIn</button>
    </form>
}
export default Login