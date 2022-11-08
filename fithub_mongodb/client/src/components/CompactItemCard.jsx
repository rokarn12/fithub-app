// import { Button } from "bootstrap";
import React, { useState } from "react";

import {
    Button
} from '@mui/material';

const CompactItemCard = (props) => {

    return (
        <div id='itemCard' className='media'>
            <img id='img_icon' src={props.img_src} className='mr-3' alt='img1' style={{backgroundColor: props.color}}></img>
            <div className='media-body text-left'>
                <h4 className='mt-0 mb-1'>{props.article}</h4>
                <p classname='mt-0 mb-1'>Color: {props.color} <b>|</b> Type: {props.type}</p>
            </div>
        </div>
    );
};

export default CompactItemCard;
