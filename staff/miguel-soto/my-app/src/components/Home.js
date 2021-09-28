import { useState, useEffect } from 'react'
import { retrieve, logout } from '../services/user.service'

//Hooks = useState
//Peticiones a API = useEffect
function Home({ onLogout }) {

    const [user, setUser] = useState()

    useEffect(() => {
        (async () => {
            try {
                const user = await retrieve()
                setUser(user)

            } catch (error) {
                alert(error.message)
            }
        })() //IIFE = creo una funcion y la invoco inmediatamente
    }, [])

    //Arrow function para bindear y poder usar this
    const handleLogout = () => {
        //borro token del sessionStorage
        logout()
        onLogout()
    }


    return <>
        {user ? <>
            <h1>Hello, {user.name}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
            : <p>ERROR, user not loaded!</p>}
    </>

}

export default Home