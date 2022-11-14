import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';

import './css/home.css';
import ItemCard from '../components/ItemCard.jsx';

import CompactItemCard from '../components/CompactItemCard.jsx';

import {
    Button
} from '@mui/material';

const SavedOutfits = () => { 
    const {user} = useContext(UserContext);
    var itemName = "defaultName";

    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div id="dashboard">
                <h1>Saved Outfits</h1>
            </div>   
            <div id="line"></div>
            <Button id="button" variant="contained" size="large" style={{backgroundColor: "rgba(0, 110, 255, 1)"}} >
                Refresh E-Closet
            </Button>
            <div className="container">
                <h3>OutfitName1</h3>
                <CompactItemCard article='Hat' color ={"red"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shirt' color ={"white"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shorts' color ={"brown"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shoes' color ={"grey"} type='Casual' name = {itemName}/>
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