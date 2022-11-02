import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';

import './css/home.css';
import ItemCard from '../components/ItemCard.jsx';

import {
    Button
} from '@mui/material';

const ECloset = () => { 
    const {user} = useContext(UserContext);

    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div className="container mt-5 mb-5 col-lg">
                <div className="alert p-5">
                    <h1>E-Closet</h1>
                </div>
            </div>            

        </div>
        // add user dashboard functionality here
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View Outfit Generator</h1>
            </div>
        </div> 
    )));
};

export default ECloset;