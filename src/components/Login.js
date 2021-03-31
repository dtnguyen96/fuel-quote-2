import React, { useState, useContext } from 'react'
import axios from "axios";
import AuthContext from './Context/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/login", loginData);
            await getLoggedIn();
            history.push("/profile-management");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <form onSubmit={login}>
            <h3>Login component</h3>
            <div className="form-group">
                <label>
                    Email
                </label>
                <input type='email'
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label>
                    Password
                </label>
                <input type='password'
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                <a href='http://localhost:3000/sign-up'>Sign Up</a>
            </p>
        </form>
    )
}

export default Login
