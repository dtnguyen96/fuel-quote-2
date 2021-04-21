import React, { useState, useContext } from 'react'
import axios from "axios";
import AuthContext from './Context/AuthContext';
import { useHistory } from 'react-router-dom';

import { EmailContext } from "./Context/EmailContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const { setSavedEmail } = useContext(EmailContext);

    const history = useHistory();

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            await getLoggedIn();
            history.push("/profile-management")
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <form onSubmit={register}>
                <h3>Signup component</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => 
                            {
                                setEmail(e.target.value)
                                setSavedEmail(e.target.value)
                            }
                    }
                        value={email}
                    />
                </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className="form-group">
                <label>Verify Password</label>
                <input type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    value={passwordVerify}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block ">Sign Up</button>
            <p className="forgot=password text-right">
                Already registered? <a href="http://localhost:3000/sign-in">Sign in</a>
            </p>
        </form>
    )
}

export default Signup
