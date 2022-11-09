// import { Button } from "bootstrap";
import React, { useState } from 'react';

import '../pages/css/home.css';

import {
    Button
} from '@mui/material';

const itemCard = (props) => {

    // const [imgSrc, updateImgSrc] = useState(props.img_src);
    // const [imgSrc, setAllItems] = useState("");
    // 
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
        case "Shoes":
                imgSrc = require('../pages/images/sneakers.png');
                break;
    }

    return (
        <div id='itemCard' className='media'>
            <img id='img_icon' src={imgSrc} className='mr-3' alt='img1' style={{borderColor: props.color}}></img>
            <div className='media-body text-left'>
                <h4 className='mt-0 mb-1'>{props.article}</h4>
                <p classname='mt-0 mb-1'>Color: {props.color} <b>|</b> Type: {props.type}</p>
                <p>&ensp;{props.description}</p>
            </div>
            <div>
                <Button variant="outlined">
                    EDIT
                </Button>
            </div>
        </div>
    );
};

export default itemCard;
