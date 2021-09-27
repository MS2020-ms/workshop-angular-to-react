import { validateEmail } from './utils';

export function logino(email, password) {
    //Al no tener TypeScript de base tengo que condicionar lo recibido
    //Validar los campos antes de enviar al seridor
    if (typeof email != 'string') throw new TypeError(`${email} is not string`)
    if (!validateEmail(email)) throw new Error(`${email} is not an E-mail`)
    if (typeof password != 'string') throw new TypeError(`${password} is not string`)
    if (!password.trim().length) throw new Error(`password ${password} is empty or blank`)

    //En lugar del console.log:
    //debugger

    //console.log('call API for auth', email, password);


    return fetch('http://b00tc4mp.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password })
    })

        .then(res => {
            if (res.ok)
                return res.json()
                    .then(res => {
                        const { token } = res

                        //debugger
                        return token
                    })
            else {
                if (res.status >= 400 && res.status < 500)
                    return res.json()
                        .then(res => {
                            const { error } = res

                            //debugger
                            throw new Error(error)
                        })
                else
                    throw new Error('server error')
            }
        })

}

export function register(name, email, password) {
    // input validation
    // call api to register user (endpoint: http://b00tc4mp.herokuapp.com/api/v2/users)
}