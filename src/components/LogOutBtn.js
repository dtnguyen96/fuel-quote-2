import React, { useContext } from 'react'
import AuthContext from "../components/Context/AuthContext"
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const LogOutBtn = () => {
    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory();
    
    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        getLoggedIn();
        history.push("/");
    }
    return (
        <div>
            <button onClick={logOut} className="btn btn-primary btn-block">Log out</button>
        </div>
    )
}

export default LogOutBtn
