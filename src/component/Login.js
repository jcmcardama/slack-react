import { useState } from "react"
import { userLogin } from "../api/api-login.js"
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'


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
        if(email === "" || password === "") {
            alert("Fill required fields");
        } else {
            userLogin(email, password);
            window.location.replace("/dashboard");
        }
    };

    return (
        <div className="auth">
            {/* Header */}
            <header className='auth-header'>
                <div>
                    <img className='slack-logo-auth' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg' alt='Slack-logo' height='24px'/>
                </div>
                <div>
                    <h1>Sign in to Slack</h1>
                    <p>We suggest using the <strong>email address you use at work.</strong></p>
                </div>
            </header>
            {/* Body */}
            <form className="login-form" onSubmit={submitHandler}>
                {/* Google Apple -- to refactor if may time */}
                <div className="login-google">
                    <div className="login-icon">
                        <FcGoogle />
                    </div>
                    <p>Sign in with Google</p>
                </div>
                <div className="login-apple">
                    <div className="login-icon">
                        <AiFillApple />
                    </div>
                    <p>Sign in with Apple</p>
                </div>
                {/* Divider */}
                <div className="login-divider">
                    <p className="login-divider-text">OR</p>
                </div>
                <input
                className="input-auth"
                type="text"
                placeholder="Email"
                value={email}
                onChange={emailChangeHandler} required
                />
                <input
                className="input-auth"
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordChangeHandler} 
                required
                />
                <button className="auth-button" type="submit">Submit</button>
            </form>
            {/* Footer */}
            <footer className='auth-footer'>
                <div>
                    <a href="https://slack.com/legal">Privacy & Terms</a>
                </div>
                <div>
                    <a href="https://slack.com/help/contact">Contact Us</a>
                </div>
                <div className='change-region'>
                    <span><FiGlobe/></span>
                    <span>Change region</span>
                    <span><FiChevronDown/></span>
                </div>
            </footer>
        </div>
    )
}

export default Login