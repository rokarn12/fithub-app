import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './css/home.css';
import ItemCard from '../components/ItemCard.jsx';
import { getOutfits } from "../api/outfit";

import CompactItemCard from '../components/CompactItemCard.jsx';

import {
    Button
} from '@mui/material';

const SavedOutfits = () => { 
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const [allOutfits, setAllOutfits] = useState([]);
    var itemName = "defaultName";

    const handleGetOutfits = async (e) => {
        // e.preventDefault();
        try {
            console.log("1");
            console.log("current user:", user);
            const res = await getOutfits({user});
            console.log("success");
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                setAllOutfits(res.items);
                console.log(allOutfits);
            }
        } catch (err) {
            console.log(err);
            navigate('/userdashboard', {replace: true});
            toast.error(err);
        }
    };

    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div id="dashboard">
                <h1>Saved Outfits</h1>
            </div>   
            <div id="line"></div>
            <Button id="button" variant="contained" onClick={handleGetOutfits} size="large" style={{backgroundColor: "rgba(0, 110, 255, 1)"}} >
                Refresh Outfits
            </Button>
            <div className="container">
                {allOutfits.forEach(outfit => { })}
            </div>      
            <div className="container">
                <h3>OutfitName2</h3>
                <CompactItemCard article='Hat' color ={"white"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shirt' color ={"grey"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Pants' color ={"MidnightBlue"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shoes' color ={"SlateGrey"} type='Casual' name = {itemName}/>
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

export default SavedOutfits;