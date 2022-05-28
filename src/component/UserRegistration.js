import {useState} from "react";
import {userRegistration} from "../api/api-registration.js"

const UserRegistration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const passwordConfirmationChangeHandler = (event) => {
        setPasswordConfirmation(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        userRegistration(email, password, passwordConfirmation)
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
      };

    return(
        <div>
            <h1>User Registration</h1>
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
                <input
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={passwordConfirmationChangeHandler} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default UserRegistration;