import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './css/home.css';
import ItemCard from '../components/ItemCard.jsx';
import { getOutfits } from "../api/outfit";
import { getItems } from "../api/closet";

import CompactItemCard from '../components/CompactItemCard.jsx';

import {
    Button
} from '@mui/material';

const SavedOutfits = () => { 
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const [allUserOutfits, setAllOutfits] = useState([]);
    var itemName = "defaultName";

    const handlegetItems = async (e) => {
        // e.preventDefault();
        try {
            const res = await getItems({user});
            console.log("successfully got user items");
            if (res.error) toast.error(res.error);
            else {
                // display success message
                // toast.success(res.message);
                // redirect user back to add item page
                // navigate('/ecloset', {replace: true});
                // use set state to update variable
                // setAllItems(res.items);
                

                console.log(res.items);
                // res.items.forEach(element => console.log(element._id));
                return res.items;
            }
        } catch (err) {
            console.log(err);
            // navigate('/userdashboard', {replace: true});
            toast.error(err);
            return -1;
        }
    };

    const handleGetOutfits = async (e) => {
        // e.preventDefault();
        try {
            console.log("1");
            console.log("current user:", user);
            const res = await getOutfits({user});
            console.log("success");
            if (res.error) toast.error(res.error);
            else {
                // toast.success(res.message);
                // setAllOutfits(res.items);
                // console.log(allOutfits);

                // var res2 = await handlegetItems();
                // console.log("result 2: ", res2);
                // res2.forEach(element => console.log(element._id));
                return (res.items);
            }
        } catch (err) {
            console.log(err);
            // navigate('/userdashboard', {replace: true});
            toast.error(err);
        }
    };

    const showAllOutfits = async (e) => {
        e.preventDefault();
        try {
            const allItems = await handlegetItems();
            const allOutfits = await handleGetOutfits();

            console.log(allItems);
            console.log(allOutfits);

            // setAllOutfits();
            var outfits = [];

            allOutfits.forEach( function (currentOutfit) {
                // console.log("current element: ", element);
                
               
                var last = [];

                allItems.forEach( function (currentItem) {
                    
                    // var currentHat = {itemName: "", attireType: "", color: "", clothingType: ""};
                    var currentHat, currentTop, currentBottom, currentShoes;

                    // if (currentItem._id === currentOutfit) {}
                    console.log(currentItem._id, currentOutfit.fitHat);
                    switch (currentItem._id) {
                        case currentOutfit.fitHat:
                            currentHat = {itemName: currentItem.itemName, attireType: currentItem.attireType, color: currentItem.color, clothingType: currentItem.clothingType};
                            console.log("found hat ***8");
                            break;
                        case currentOutfit.fitTop:
                            currentTop = {itemName: currentItem.itemName, attireType: currentItem.attireType, color: currentItem.color, clothingType: currentItem.clothingType};
                            break;
                        case currentOutfit.fitBottom:
                            currentBottom = {itemName: currentItem.itemName, attireType: currentItem.attireType, color: currentItem.color, clothingType: currentItem.clothingType};
                            break;
                        case currentOutfit.fitShoes:
                            currentShoes = {itemName: currentItem.itemName, attireType: currentItem.attireType, color: currentItem.color, clothingType: currentItem.clothingType};
                            break;
                    }

                    last = [currentHat, currentTop, currentBottom, currentShoes];

                });

                outfits.push(last);
                last = [];
            });

            // return outfits;
            setAllOutfits(outfits);
            console.log(outfits);

        } catch (err) {
            console.log(err);
        }
    }

    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div id="dashboard">
                <h1>Saved Outfits</h1>
            </div>   
            <div id="line"></div>
            <Button id="button" variant="contained" onClick={showAllOutfits} size="large" style={{backgroundColor: "rgba(0, 110, 255, 1)"}} >
                Refresh Outfits
            </Button>
            <div className="container">
                {allUserOutfits.map((outfit) => (
                    <div>
                    {outfit.map((item) => (
                        <CompactItemCard article = {item["clothingType"]} color = {item["color"]} type = {item["attireType"]} name = {item["itemName"]}/>
                    ))}
                    </div>
                ))}

            </div>
            {/* <div className="container">
                <h3>OutfitName1</h3>
                <CompactItemCard article='Hat' color ={"red"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shirt' color ={"white"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shorts' color ={"brown"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shoes' color ={"grey"} type='Casual' name = {itemName}/>
            </div>       */}
            {/* <div className="container">
                <h3>OutfitName2</h3>
                <CompactItemCard article='Hat' color ={"white"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shirt' color ={"grey"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Pants' color ={"MidnightBlue"} type='Casual' name = {itemName}/>
                <CompactItemCard article='Shoes' color ={"SlateGrey"} type='Casual' name = {itemName}/>
            </div>  */}
        </div>
        // add user dashboard functionality here
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View Outfit Generator</h1>
            </div>
        </div> 
    )));
};

export default SavedOutfits;