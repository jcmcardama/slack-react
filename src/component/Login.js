import { useState } from "react"
import { UserLogin } from "../api/api-login.js"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        UserLogin(email, password);
    };

    return (
        <div>
        <h1>Log In</h1>
        <form onSubmit={submitHandler}>
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler} 
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler} 
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login