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
        <div className="container text-center mt-5 mb-5">
            <div id="dashboard">
                <h1 id="fithub">FitHub</h1>
                <h2>Expect more from your clothes.</h2>
            </div>
            <div id="line"></div>

            <div className="container">
                <div className="container">
                    <Link to="/additempage">
                        <Button id="button" style={{backgroundColor: "rgba(0, 110, 255, 1)"}} variant="contained">Add Item</Button> {' '}
                    </Link>
                    <br/>
                    
                    <Link to="/ecloset">
                        <Button id="button" style={{backgroundColor: "rgba(0, 81, 189, 1)"}} variant="contained">E-Closet</Button>{' '}
                    </Link>
                    <br/>
                    <Link to="/savedoutfits">
                        <Button id="button" style={{backgroundColor: "rgba(0, 55, 128, 1)"}} variant="contained">Saved Outfits</Button>{' '}
                    </Link>
                    <br/>
                    <Link to="/outfitgenerator">
                        <Button id="button" style={{backgroundColor: "rgba(0, 37, 87, 1)"}} variant="contained" >Generate New Outfit</Button>
                    </Link>
                    
                    {/* <br></br> */}
                </div>
                {/* <div className="container">
                    <br></br>
                    
                    <br></br>
                        
                </div> */}
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