// import { Button } from "bootstrap";
import React, {useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

import '../pages/css/home.css';

import {
    Button
} from '@mui/material';

import { removeItem } from "../api/closet";

const ItemCard = (props) => {

    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    var imgSrc = props.img_src;

    switch (props.article) {
        case "Hat":
            imgSrc = require('../pages/images/cap.png');
            break;
        case "Shirt":
            imgSrc = require('../pages/images/tshirt.png');
            break;
        case "T-Shirt":
            imgSrc = require('../pages/images/tshirt.png');
            break;
        case "Shorts":
            imgSrc = require('../pages/images/shorts.png');
            break;
        case "Pants":
            imgSrc = require('../pages/images/pants.png');
            break;
        case "Shoes":
            imgSrc = require('../pages/images/sneakers.png');
            break;
    }

    var name = props.name
    var article = props.article
    var type = props.type
    var color = props.color
    var inCloset = props.inCloset

    const handleRemoveItem = async (e) => {
        e.preventDefault();
        
        try {
            const res = await removeItem({user, name, article, color, type});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                // redirect user back to add item page
                navigate('/ecloset', {replace: true});
                console.log("removed item");
                window.alert("Item successfully removed!")
                window.location.reload();
            }
        } catch (err) {
            toast.error(err);
        }
    };

    return (
        <div id='itemCard' className='media'>
            <img id='img_icon' src={imgSrc} className='mr-3' alt='img1' style={{borderColor: props.color}}></img>
            <div className='media-body text-left'>
                <h4 className='mt-0 mb-1'>{props.article} | {props.name}</h4>
                <p classname='mt-0 mb-1'>Color: {props.color} <b>|</b> Type: {props.type}</p>
                <p>&ensp;{props.description}</p>
            </div>
            <div>
                {inCloset && 
                    <Button variant="outlined" onClick={handleRemoveItem}>
                        REMOVE
                    </Button>
                }
            </div>
        </div>
    );
};

export default ItemCard;
