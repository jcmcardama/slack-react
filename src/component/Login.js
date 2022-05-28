import { useState } from "react"
import { userLogin } from "../api/api-login"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        userLogin(username, password)
        //console.log(username, password)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login