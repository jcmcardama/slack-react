import {useState} from "react";
import {userRegistration} from "../api/api-registration.js"
import { FiGlobe, FiChevronDown } from "react-icons/fi";

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
        if(email === "" || password === "" || passwordConfirmation === "") {
            alert("Fill required fields")
        } else {
            userRegistration(email, password, passwordConfirmation)
            setEmail("");
            setPassword("");
            setPasswordConfirmation("");
            window.location.replace("/dashboard");
        }
      };
  
    return(
        <div className="auth">
            {/* Header */}
            <header className='auth-header'>
                <div>
                    <img className='slack-logo-auth' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg' alt='Slack-logo' height='24px'/>
                </div>
                <div>
                    <h1>Set up your email and password</h1>
                    <p>We suggest using the email account you use for work.</p>
                </div>
            </header>
            {/* Body */}
            <form className="reg-form" onSubmit={submitHandler}>
                <input
                className="input-auth"
                type="text"
                placeholder="name@work-email.com"
                value={email}
                onChange={emailChangeHandler}
                required
                />
                <input
                className="input-auth"
                type="password"
                placeholder="Enter your password here"
                value={password}
                onChange={passwordChangeHandler}
                required
                />
                <input
                className="input-auth"
                type="password"
                placeholder="Confirm your password here"
                value={passwordConfirmation}
                onChange={passwordConfirmationChangeHandler}
                required
                />
                <button className="auth-button" type="submit">Submit</button>
                <div className="reg-checkbox">
                    <input
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    value="subscribe"
                    ></input>
                    <span className="label-regcheckbox">
                    It's okay to send me emails about Slack.
                    </span>
                </div>
                <div className="reg-terms">
                    By continuing, you're agreeing to our{' '}
                    <a href="https://slack.com/terms-of-service">
                    Customer Terms of Service
                    </a>
                    , <a href="https://slack.com/privacy-policy">Privacy Policy</a>
                    , <a href="https://slack.com/terms-of-service/user">User Terms of Service</a>, and{' '}
                    <a href="https://slack.com/cookie-policy">Cookie Policy</a>.
                </div>
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
    );
};
export default UserRegistration;