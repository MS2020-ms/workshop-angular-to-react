//envio las props name y surname directamente desde App.js
// function Home({ name, surname }) {
//     return <h1>Hello, {name + ' ' + surname}!</h1>
// }

// HACER retrieve user (user.service -> retrieve) and show "Hello, <name>!"

import { Component } from 'react'
import { retrieve, logout } from '../services/user.service'

class Home extends Component {

    state = { user: null }

    async componentWillMount() {
        try {
            const user = await retrieve()
            this.setState({ user })

        } catch (error) {
            alert(error.message)
        }
    }

    //Arrow function para bindear y poder usar this
    handleLogout = () => {
        //borro token del sessionStorage
        logout()
        this.props.onLogout()
    }

    render() {
        //return <h1>Hello { }!</h1>
        const { state: { user }, handleLogout } = this
        return <>
            {user ? <>
                <h1>Hello, {user.name}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </>
                : <p>ERROR, user not loaded!</p>}
        </>
    }
}

export default Home