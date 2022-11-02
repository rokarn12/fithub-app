import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CirclePicker } from 'react-color';
import {
    Button
} from '@mui/material';

const AddItemPage = () => {
    return (
        <div className="container text-center" style={{marginTop: "8rem", backgroundColor: "powderblue"}}>
            <div><h1>Add Item</h1></div>
            <div className="d-flex flex-row mb-3" style={{marginTop: "30px"}}>
                
                <div id = 'ClothingType' className="container" style={{padding: "10px"}}>
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
                <div><Component></Component></div>
                <div id='AttireType' className="container">
                    <label for="attire-type">Attire Type: </label>
                    <select name="attire-type" id="attire-types">
                    <option value="formal">Formal</option>
                    <option value="business-casual">Business Casual</option>
                    <option value="casual">Casual</option>
                    </select>
                </div>
            </div>
            <Button variant="contained" style={{marginTop: "8rem"}}>Add Item</Button>
        </div>
    );
};

export default AddItemPage;
class Component extends React.Component {
    render() {
        return <CirclePicker        
        colors = {['black', 'white', 'grey', 'red', 'orange', 'SaddleBrown', 'yellow', 'green', 'blue', 'purple', 'pink', 'cornsilk']}
        />;
    }
}