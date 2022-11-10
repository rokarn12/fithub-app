import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './css/home.css';

import {
    Button
} from '@mui/material';

import ItemCard from './../components/ItemCard.jsx';
import { textAlign } from "@mui/system";

const Home = () => {

    return (
       
        <div id="main" className="container text-center" style={{marginTop: "1rem"}}>
            <div >
                <div id='back1' className="container mt-5 mb-5">
                    <div id="dashboard">
                        <h1>FitHub</h1>
                        <h2>Expect more from your clothes.</h2>
                    </div>
                    <div id="line"></div>
                    <p id="description">&ensp;&ensp;&ensp;How long does it take to figure out what to wear in the morning? 
                        How many pieces of clothes do you have? Can you even estimate it? 
                        Exactly. How are you supposed to pair the perfect top with the perfect bottom, 
                        in a timely fashion, without knowing every single item in your closet or dresser? 
                        That’s why we created FitHub, a hub for all of your outfits. Our easy-to-use interface 
                        allows you to input your clothes into the virtual closet, so you don’t have to tear 
                        apart your wardrobe looking for ideas on what to wear. Our software also lets you mix 
                        and match clothes, favorite outfits, plan outfits for the week, and our exclusive color 
                        algorithm will recommend clothes that will go well with the type of event, and the rest 
                        of your fit. Don’t waste any more time cleaning up after trying on too many outfits. Try out the
                        outfit generator below!</p>
                </div>
            </div>
            <div className="text-center col-lg"> 
                <br></br>   
                <p>Ready to try it? Sign up below!</p>
                <Link className="nav-link" to="/signup">
                    <Button variant="contained">
                                Sign Up
                    </Button>
                </Link>
                <br></br>
                <p>Already a user? Login below!</p>
                <Link className="nav-link" to="/login">
                    <Button variant="contained">
                                Login
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;