import React, { useState } from "react";

const itemCard = (props) => {
    // const color1 = "red"
    // const color2 = "blue"
    // const current_color = color2

    // const move = async () => {
    //     while (true){
            
    //         setTimeout(function(){},1000);
    //         current_color = color1;
    //         setTimeout(function(){},1000);
    //         current_color = color2;
    //     }
    // }

    // move();

    return (
        <div id='itemCard' className='media'>
            <img id='img_icon' src={props.img_src} className='mr-3' alt='img1' style={{backgroundColor: props.color}}></img>
            <div className='media-body text-left'>
                <h4 className='mt-0 mb-1'>{props.article}</h4>
                <p classname='mt-0 mb-1'>Color: {props.color} <b>|</b> Type: {props.type}</p>
                <p>&ensp;{props.description}</p>
            </div>
        </div>
    );
};

export default itemCard;
