import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './css/home.css';

import {
    Button
} from '@mui/material';

import ItemCard from './../components/ItemCard.jsx';

const Home = () => {
    return (
        
        <div className="container text-center" style={{marginTop: "1rem"}}>
            <div id='back1' className="container mt-5 mb-5">
                <h1>FitHub</h1>
                <h2>Expect more from your clothes.</h2>
            </div>
            <div className="container mt-5 mb-5 col-lg">
                <ItemCard article='Hat' color = 'Red' type='Casual' img_src={require('./images/cap.png')}
                        description="It's looking pretty sunny out today. We want to make sure you're looking stylish and protected! It's looking pretty sunny out today. We want to make sure you're looking stylish and protected! It's looking pretty sunny out today. We want to make sure you're looking stylish and protected!"/>
                <ItemCard article='Shirt' color = 'White' type='Casual'
                        description="We love this T-shirt, what do you think?"/>
                <ItemCard article='Shorts' color = 'Brown' type='Casual'
                        description="These shorts match your other clothing perfectly!"/>
                <ItemCard article='Shoes' color = 'Grey' type='Casual'
                        description="Your schedule seems busy today, these should support you throughout the whole day."/>
            </div>            
            <div className="text-center col-lg">
                <Button variant="contained">
                            Sign Up
                </Button>
                {' '}
                <Button variant="contained">
                            Login
                </Button>
            </div>
        </div>
    );
};

export default Home;