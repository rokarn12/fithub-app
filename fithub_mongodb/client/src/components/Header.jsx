import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { UserContext } from "../UserContext";

// functions
import {logout} from '../api/user';

const Header = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    const handleLogout = (e) => {
        e.preventDefault();

        logout().then((res) => {
            toast.success(res.message);
            // set user to null
            setUser(null);
            // redirect user to login
            navigate('/login');
        }).catch((err) => console.error(err));
    };
    // sets the orientation of the header and links to dashboard, signup, logout, and login depending on if user is signed in
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={user ? "/userdashboard" : "/"}>
                {user ? <span >{user}'s FitHub Dashboard</span>  : "FitHub"}
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                {!user ? (
                    <>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                    </>
                ) : (
                    <li className="nav-item">
                        <span 
                            className="nav-link"
                            style={{cursor: "pointer"}}
                            onClick={handleLogout}
                        >Logout</span>
                    </li>
                )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;