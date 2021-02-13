import React from 'react'

const Login = () => {
    return (
        <form>
            <h3>Login component</h3>
            <div className="form-group">
                <label>
                    Username
                </label>
                <input type='email' className="form-control" placeholder="Enter username"/>
            </div>
            <div className="form-group">
                <label>
                    Password
                </label>
                <input type='password' className="form-control" placeholder="Enter password" /> 
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                <a href='#' >Forgot password?</a>

            </p>


        </form>
    )
}

export default Login
