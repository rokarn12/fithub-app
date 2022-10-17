import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './css/home.css';

const Home = () => {
    return (
        
        <div className="container text-center" style={{marginTop: "5rem"}}>
            <div>
                <h1>FitHub</h1>
                <h2>Expect more from your clothes.</h2>
            </div>
            
            <div className="alert alert-primary p-5">
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;