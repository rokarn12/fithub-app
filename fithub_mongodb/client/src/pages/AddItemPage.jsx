import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CirclePicker } from 'react-color';
import {
    TextField,
    Button
} from '@mui/material';
import { UserContext } from '../UserContext';

// functions
import { addItem } from "../api/closet";

const AddItemPage = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    // form states
    const [clothingType, setClothingType] = useState("T-Shirt");
    const [color, setColor] = useState("black");
    const [attireType, setAttireType] = useState("Formal");
    const [itemName, setitemName] = useState("defaultName");

    const handleAddItem = async (e) => {
        e.preventDefault();
        
        try {
            const res = await addItem({user, itemName, clothingType, color, attireType});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                // redirect user back to add item page
                navigate('/additempage', {replace: true});
                console.log("added item");
                window.alert("Item successfully added!")
            }
        } catch (err) {
            toast.error(err);
        }
    };
    
    return (
        <div className="container text-center" style={{marginTop: "8rem"}}>
            <div id="dashboard">
                <h1>Add Item</h1>
            </div>   
            <div id="line"></div>
            <div className="d-flex flex-row mb-3" style={{marginTop: "30px", backgroundColor: ""}}>
                <div id = 'ClothingType' className="container" style={{padding: "10px", fontSize: "20px"}}>
                    <label for="clothing-type">Clothing Type:&ensp;</label>
                    <select name="clothing-type" id="clothing-types" value={clothingType} onChange={(e) => setClothingType(e.target.value)}>
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
                {/*<div><Component value={color} onChange={(e) => setColor(e.target.value)}></Component></div>*/}
                <div id='Color' className="container" style={{padding: "10px", fontSize: "20px"}}>
                    <label for="color">Color:&ensp;</label>
                    <select name="color" id="colors" value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="brown">Brown</option>
                    <option value="white">White</option>
                    </select>
                </div>
                <div id='AttireType' className="container" style={{padding: "10px", fontSize: "20px"}}>
                    <label for="attire-type">Attire Type:&ensp;</label>
                    <select name="attire-type" id="attire-types" value={attireType} onChange={(e) => setAttireType(e.target.value)}>
                    <option value="formal">Formal</option>
                    <option value="business-casual">Business Casual</option>
                    <option value="casual">Casual</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-row mb-3 justify-content-center" style={{marginTop: "50px"}}>
                <TextField 
                        size="small"
                        variant="outlined"
                        label="Name"
                        //style={{marginLeft: "457px"}}
                        value={itemName}
                        onChange={(e) => setitemName(e.target.value)}/>
            </div>
            <Button variant="contained" style={{marginTop: "4rem"}} onClick={handleAddItem}>Add Item</Button>
        </div>
    );
};


export default AddItemPage;
/*
class Component extends React.Component {
    render() {
        return <CirclePicker        
        colors = {['black', 'white', 'grey', 'red', 'orange', 'SaddleBrown', 'yellow', 'green', 'blue', 'purple', 'pink', 'cornsilk']}
        />;
    }
}
*/