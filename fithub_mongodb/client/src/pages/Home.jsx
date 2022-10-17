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
            <ItemCard />
            <div id='back2' className="container mt-5 mb-5 col-lg">
                <div className='media'>
                    <img id='img1' src={require('./images/cap.png')} className='mr-3' alt='img1'></img>
                    <div className='media-body text-left'>
                        <h4 className='mt-0 mb-1'>Hat</h4>
                        <p>asdf</p>
                        <p>It's looking pretty sunny out today. We want to make sure you're looking stylish and protected!</p>
                        
                    </div>
                </div>
                <div className='media'>
                    <img src='' className='mr-3' alt='img2'></img>
                    <div className='media-body text-left'>
                        <h4 className='mt-0'>Shirt</h4>
                        We love this T-shirt, what do you think?
                    </div>
                </div>
                <div className='media'>
                    <img src='' className='mr-3' alt='img3'></img>
                    <div className='media-body text-left'>
                        <h4 className='mt-0'>Shorts</h4>
                        These shorts match your other clothing perfectly!
                    </div>
                </div>
                <div className='media'>
                    <img src='' className='mr-3' alt='img4'></img>
                    <div className='media-body text-left'>
                        <h4 className='mt-0'>Shoes</h4>
                        Your schedule seems busy today, these should support you throughout the whole day.
                    </div>
                </div>
            </div>
            
            <div className="text-center col-lg">
                <Button variant="contained">
                            Sign Up
                </Button>
                
                <Button variant="contained">
                            Login
                </Button>
            </div>
        </div>
    );
};

export default Home;