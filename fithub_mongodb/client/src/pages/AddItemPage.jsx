import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddItemPage = () => {
    return (
        <div className="container text-center" style={{marginTop: "1rem"}}>
            <div id='back1' className="container mt-5 mb-5">
                <h1>Add Item</h1>
            </div>
            <div className="ClothingType">
                <label for="clothing-type">Clothing Type: </label>
                <select name="clothing-type" id="clothing-types">
                <option value="T-shirt">T-shirt</option>
                <option value="Shirt">Shirt</option>
                <option value="Hat">Hat</option>
                <option value="Shoes">Shoes</option>
                <option value="Pants">Pants</option>
                <option value="Shorts">Shorts</option>
                <option value="Jacket">Jacket</option>
                <option value="Pullover">Pullover</option>
                </select>
            </div>
            <div className="AttireType">
                <label for="attire-type">Attire Type: </label>
                <select name="attire-type" id="attire-types">
                <option value="formal">Formal</option>
                <option value="business-casual">Business Casual</option>
                <option value="casual">Casual</option>
                </select>
            </div>
        </div>
    );
};

export default AddItemPage;