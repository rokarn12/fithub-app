import React, { useState } from "react";

const itemCard = (src) => {
    const src1 = './../pages/images/cap.png';

    return (
        <div className='media'>
            <img id='img1' src='' className='mr-3' alt='img1'></img>
            <div className='media-body text-left'>
                <h4 className='mt-0 mb-1'>Hat</h4>
                <p>Color: _____ | Type: _____</p>
                <p>Description for why this item of clothing was selected</p>
            </div>
        </div>
    );
};

export default itemCard;
