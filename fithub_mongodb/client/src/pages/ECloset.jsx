import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import './css/home.css';
import ItemCard from '../components/ItemCard.jsx';

// import CompactItemCard from '../';
import { getItems } from "../api/closet";

import {
    Button
} from '@mui/material';

const ECloset = () => { 

    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [allItems, setAllItems] = useState([]);
    // var allItems = [];

    const handlegetItems = async (e) => {
        e.preventDefault();
        try {
            console.log("1");
            const res = await getItems(user);
            console.log("success");
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                // window.alert(res.message);
                // redirect user back to add item page
                navigate('/ecloset', {replace: true});
                setAllItems(res.items);
                // console.log("successfully received all it")
            }
        } catch (err) {
            console.log(err);
            navigate('/userdashboard', {replace: true});
            toast.error(err);
        }
    };
    //handlegetItems();
    console.log(allItems, " <- all");
    // window.alert("hi"); handlegetItems()

    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div className="container mt-5 mb-5 col-lg">
                <div className="alert p-5">
                    <h1>E-Closet</h1>
                </div>
                <Button variant="contained" size="large" onClick={handlegetItems} >
                    Refresh E-Closet
                </Button>
                <div>
                    {allItems.map((item) => (
                        //<li key={index}>{"Name:" + item.ItemName + "\tClothing Type\t" + item.clothingType }</li>
                        <ItemCard article = {item.clothingType} color = {item.color} type = {item.attireType}/>
                    ))}
                </div>
            </div>            
        </div>
        // add user dashboard functionality here
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View E-Closet</h1>
            </div>
        </div> 
    )));
};

export default ECloset;