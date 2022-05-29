//LOGIN
export const userLogin = async (email, password) => {
    // storage for Headers to be used on other functions
    let loginHeaders = new Headers()

    let raw = {
        email: email,
        password: password
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw)
    }

    //[WIP] 
    await fetch('http://206.189.91.54//api/v1/auth/sign_in', options)
            .then((response) => console.log(response))
            .then(console.log(raw))

    return loginHeaders
}
