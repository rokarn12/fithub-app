// import { Button } from "bootstrap";
import React, { useState } from "react";

import {
    Button
} from '@mui/material';

const CompactItemCard = (props) => {

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

    return (
        <div classname="container" style={{display: "inline-block"}}>
            <div id='itemCard' className='media'>
                <img id='img_icon' src={imgSrc} className='mr-3' alt='img1' style={{borderColor: props.color}}></img>
            </div>
            <div className='media-body text-centered'>
                <h4 className='mt-0 mb-1'>{props.article}</h4>
                <h5 className='mt-0 mb-1'>{props.name}</h5>
                <p classname='mt-0 mb-1'>Color: {props.color} </p>
                <p> Type: {props.type}</p>
            </div>
        </div>
    );
};

export default CompactItemCard;
