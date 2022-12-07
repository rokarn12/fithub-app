import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import './css/home.css';
import ItemCard from './../components/ItemCard.jsx';
//import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Button
} from '@mui/material';
import { getHats, getPants, getShirts, getShoes } from '../api/closet';
import { createOutfit } from '../api/outfit';
//import { options } from "../api/weather";
//import clothingitem from '../../../server/models/clothingitem'; // this import is not supported because it is from server
//const axios = require("axios");


const OutfitGenerator = () => {
    // state variables
    const {user} = useContext(UserContext);
    const [randomOutfit, setRandomOutfit] = useState([]);

    // current outfit with test values
    const [outfitName, setOutfitName] = useState("defaultOutfitName");
    const [fitHat, setFitHat] = useState("636bfd5bdc8a74a849237497");
    const [fitTop, setFitTop] = useState("636bf7e38439b103746bd34e");
    const [fitBottom, setFitBottom] = useState("636bfc4664b46d82576dc2d6");
    const [fitShoes, setFitShoes] = useState("636b40b077c9e48761bae76f");

    // get all hats for this user
    const handleGetHats = async () => {
        // e.preventDefault();
        console.log("getting hats");
        try {
            const res = await getHats({user});
            console.log("result: ", res);
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                console.log("hats: ", res.hats);
                // setHats(res.hats);
                // console.log("Set hats: ", hats);
                console.log("user: ", user);
                return (res.hats);
            }
        } catch (err) {
            toast.error(err);
            return;
        }
    };

    // get all shirts for this user
    const handleGetShirts = async (e) => {
        //e.preventDefault();
        console.log("getting shirts");
        try {
            const res = await getShirts({user});
            if (res.error) {
                toast.error(res.error);
            }
            else {
                toast.success(res.message);
                // setShirts(res.shirts);
                return (res.shirts);
            }
        } catch (err) {
            toast.error(err);
        }
    };

    // get all pants for this user
    const handleGetPants = async (e) => {
        //e.preventDefault();
        console.log("getting pants");
        try {
            const res = await getPants({user});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                // setPants(res.pants);
                return (res.pants);
            }
        } catch (err) {
            toast.error(err);
        }
    };

    // get all shoes for this user
    const handleGetShoes = async (e) => {
        console.log("getting shoes");
        try {
            const res = await getShoes({user});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                // setShoes(res.shoes);
                return(res.shoes);
            }
        } catch (err) {
            toast.error(err);
        }
    };


    // used for temporary outfit generation
    const outfits = [
        ["White", "Grey", "MidnightBlue", "SlateGrey"],
        ["Red", "Grey", "SlateGrey", "White"],
        ["Orange", "Grey", "SlateGrey", "White"],
        ["Yellow", "Grey", "SlateGrey", "White"],
    ]


    // variables for outfit switcher
    const [ani, animate1] = useState("outfit1");
    const [outfit_counter, increase] = useState(0);
    const [isDisabled, toggleDisable] = useState(false);

    const changeStyle = async(event) => {
        // fill all item lists
        console.log("calling fill list");

        console.log("clicked button", outfit_counter); // current state of temp outfit generator
        // start animation state
        animate1("outfit2");
        // disable the button
        toggleDisable(true);
        // change everything

        const hats = await handleGetHats();
        const shirts = await handleGetShirts();
        const pants = await handleGetPants();
        const shoes = await handleGetShoes();

        // attempted to add a temporary empty hat so that it is included in random outfit generator
        // but it would need to import "ClothingItem" from the server side which is not supported
        // var noHat = new clothingitem({ "user": user, "itemName": "No Hat", "clothingType": "Hat", "color": "white", "attireType": "Casual"})
        // console.log("noHat: ", noHat);

        setTimeout(function() {
            var randomHat = hats[Math.floor(Math.random()*hats.length)];
            console.log("random hat: ", randomHat);
            var randomShirt = shirts[Math.floor(Math.random()*shirts.length)];
            var randomPants = pants[Math.floor(Math.random()*pants.length)];
            var randomShoes = shoes[Math.floor(Math.random()*shoes.length)];
            setRandomOutfit([randomHat, randomShirt, randomPants, randomShoes]);

            // setting outfit
            setFitHat(randomHat._id);
            setFitTop(randomShirt._id);
            setFitBottom(randomPants._id);
            setFitShoes(randomShoes._id);
            console.log("shoes for fit", fitShoes);


            console.log("random outfit: ", randomOutfit);
        }, 1000);
        
        // return back to the original state
        setTimeout(function(){
            console.log("3");
            animate1("outfit1"); // enter animation
        },2000);

        // enable the button
        setTimeout(function(){
            console.log(outfit_counter);
            toggleDisable(false);
        }, 2000);
        
        // increase the outfit counter by 1
        if (outfit_counter === outfits.length - 1) {
            increase(0);
        } else {
            increase(outfit_counter + 1);
        }
        
    }

    // outfit builder
    const buildOutfit = async (e) => {
        try {
            console.log("outfit: ", user, outfitName, fitHat, fitTop, fitBottom, fitShoes);
            const res = await createOutfit({user, outfitName, fitHat, fitTop, fitBottom, fitShoes});
            
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                window.alert("Successfully built outfit!"); // notify user
            }
        } catch (err) {
            toast.error(err);
        }
    }

    // weather api code
    // axios.request(options).then(function (response) {
    //     console.log("current weather is:", response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    return (
        (user ? ( // user is logged in, show their outfit generator
        <div className="container text-center">
            {/* <body onLoad="fillAllItemLists()"></body> */}
            <div style={{marginTop:"30px"}}></div>
            <div id='back2' className="container mt-15 mb-5 col-lg">

                {/* buttons */}
                <Button id="button" variant="contained" style={{backgroundColor: "rgba(0, 110, 255, 1)"}} disabled={isDisabled} onClick={changeStyle}>
                    Generate New Outfit
                </Button>
                &ensp;
                {/*User input field to set item name*/}
                <TextField 
                        size="big"
                        variant="outlined"
                        label="Outfit Name"
                        value={outfitName}
                        style={{marginTop:"20px"}}
                        onChange={(e) => setOutfitName(e.target.value)}/>
                <Button id="button" variant="contained" style={{backgroundColor: "rgba(0, 37, 87, 1)"}} disabled={isDisabled} onClick={buildOutfit}>
                    Save This Outfit
                </Button>
                <div id="line"></div>
                
                <div>
                    {randomOutfit.map((item) => (
                        <ItemCard inCloset = {true} article = {item.clothingType === "Hat" ? "Hat (Optional)" : item.clothingType} color = {item.color} type = {item.attireType} name = {item.itemName}/>
                    ))}
                </div>
            </div>  
        </div>
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View Outfit Generator</h1>
            </div>
        </div> 
    )));
};

export default OutfitGenerator;