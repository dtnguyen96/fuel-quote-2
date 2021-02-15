import React from 'react'

const Signup = () => {
    return (
        <form>
            <h3> Signup Component</h3>
            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="text" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block ">Sign Up</button>
            <p className="forgot=password text-right">
                Already registered? <a href="">Sign in</a>
            </p>
        </form>
    )
}

export default Signup
