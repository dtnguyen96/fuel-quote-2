import React, { useState } from 'react'
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/login", loginData, {

                withCredentials: true
            });
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
