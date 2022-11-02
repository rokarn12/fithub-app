import React, { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';


import './css/home.css';

import {
    Button
} from '@mui/material';

const UserDashboard = () => {
    const {user} = useContext(UserContext);
    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div className="alert alert-primary p-5">
                <h1>{user && <span >{user}'s</span>}{" "}
                    Personal Dashboard</h1>
            </div>

            <div className="container">
                <div className="container">
                    <Button id="button" variant="contained">Add Item</Button> {' '}
                    <Link to="/ecloset">
                        <Button variant="contained">E-Closet</Button>{' '}
                    </Link>
                    <Button variant="contained">Saved Outfits</Button>{' '}
                    {/* <br></br> */}
                </div>
                <div className="container">
                    <br></br>
                    <Link to="/outfitgenerator">
                        <Button variant="contained" >Generate New Outfit</Button>
                    </Link>
                    <br></br>
                        
                </div>
            </div>

        </div>
        // add user dashboard functionality here
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View Dashboard</h1>
            </div>
        </div> 
    )));
};

export default UserDashboard;