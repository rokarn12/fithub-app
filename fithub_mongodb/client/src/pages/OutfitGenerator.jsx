import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import './css/home.css';
import ItemCard from './../components/ItemCard.jsx';
import { useNavigate } from 'react-router-dom';
import {
    Button
} from '@mui/material';
import { getHats, getPants, getShirts, getShoes } from '../api/closet';
import { createOutfit } from '../api/outfit';

const OutfitGenerator = () => {
    // state variables
    const {user} = useContext(UserContext);
    const [hats, setHats] = useState([]);
    const [shirts, setShirts] = useState([]);
    const [pants, setPants] = useState([]);
    const [shoes, setShoes] = useState([]);

    // current outfit with test values
    const [outfitName, setOutfitName] = useState("defaultOutfitName");
    const [fitHat, setFitHat] = useState("636bfd5bdc8a74a849237497");
    const [fitTop, setFitTop] = useState("636bf7e38439b103746bd34e");
    const [fitBottom, setFitBottom] = useState("636bfc4664b46d82576dc2d6");
    const [fitShoes, setFitShoes] = useState("636b40b077c9e48761bae76f");

    // get all hats for this user
    const handleGetHats = async (e) => {
        //e.preventDefault();
        try {
            const res = await getHats({user});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                setHats(res.hats);
            }
        } catch (err) {
            toast.error(err);
        }
    };

    // get all shirts for this user
    const handleGetShirts = async (e) => {
        //e.preventDefault();
        try {
            const res = await getShirts({user});
            if (res.error) {
                toast.error(res.error);
            }
            else {
                toast.success(res.message);
                setShirts(res.shirts);
            }
        } catch (err) {
            toast.error(err);
        }
    };

    // get all pants for this user
    const handleGetPants = async (e) => {
        //e.preventDefault();
        try {
            const res = await getPants({user});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                setPants(res.pants);
            }
        } catch (err) {
            toast.error(err);
        }
    };

    // get all shoes for this user
    const handleGetShoes = async (e) => {
        try {
            const res = await getShoes({user});
            if (res.error) toast.error(res.error);
            else {
                toast.success(res.message);
                setShoes(res.shoes);
            }
        } catch (err) {
            toast.error(err);
        }
    };

    // fill all lists
    const fillAllItemLists = async(e) => {
        try {
            console.log("filling all item lists");
            handleGetHats();
            handleGetShirts();
            handleGetPants();
            handleGetShoes();
            console.log("all item lists successfully filled");
        } catch (err) {
            toast.error(err);
        }
    }

    // used for temporary outfit generation
    const outfits = [
        ["White", "Grey", "MidnightBlue", "SlateGrey"],
        ["Red", "Grey", "SlateGrey", "White"],
        ["Orange", "Grey", "SlateGrey", "White"],
        ["Yellow", "Grey", "SlateGrey", "White"],
    ]

    // print all items received from database
    console.log("Hats", hats);
    console.log("Shirts:", shirts);
    console.log("Pants:", pants);
    console.log("Shoes:", shoes);

    // pre-set outfit generation

    // variables for colors
    const [color1, setStyle_item1] = useState("Red");
    const [color2, setStyle_item2] = useState("White");
    const [color3, setStyle_item3] = useState("Brown");
    const [color4, setStyle_item4] = useState("Grey");

    // variables for outfit switcher
    const [ani, animate1] = useState("outfit1");
    const [outfit_counter, increase] = useState(0);
    const [isDisabled, toggleDisable] = useState(false);

    const changeStyle = (event) => {
        // fill all item lists
        console.log("calling fill list");
        fillAllItemLists();
        console.log("clicked button", outfit_counter); // current state of temp outfit generator
        // start animation state
        animate1("outfit2");
        // disable the button
        toggleDisable(true);
        // change everything
        setTimeout(function(){
            setStyle_item1(outfits[outfit_counter][0]);
            setStyle_item2(outfits[outfit_counter][1]);
            setStyle_item3(outfits[outfit_counter][2]);
            setStyle_item4(outfits[outfit_counter][3]);
        },1000);
        
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
        if (outfit_counter == outfits.length - 1) {
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

    return ((user ? ( // user is logged in, show their outfit generator
        <div className="container text-center">
            <div id='back2' className="container mt-5 mb-5 col-lg">

                {/* buttons */}
                <Button id="button" variant="contained" style={{backgroundColor: "rgba(0, 110, 255, 1)"}} disabled={isDisabled} onClick={changeStyle}>
                    Generate New Outfit
                </Button>
                &ensp;
                <Button id="button" variant="contained" style={{backgroundColor: "rgba(0, 37, 87, 1)"}} disabled={isDisabled} onClick={buildOutfit}>
                    Save This Outfit
                </Button>
                <div id="line"></div>
                
                <div className={ani}>
                    <ItemCard inCloset = {false} article='Hat' color ={color1} type='Casual' img_src={require('./images/cap.png')}
                            description="It's looking pretty sunny out today. We want to make sure you're looking stylish and protected!"/>
                    <ItemCard inCloset = {false} article='Shirt' color ={color2} type='Casual' img_src={require('./images/tshirt.png')}
                            description="We love this T-shirt, it has a light color to contrast your hat and shorts, what do you think?"/>
                    <ItemCard inCloset = {false} article='Shorts' color ={color3} type='Casual' img_src={require('./images/shorts.png')}
                            description="These shorts match your other clothing perfectly!"/>
                    <ItemCard inCloset = {false} article='Shoes' color ={color4} type='Casual' img_src={require('./images/sneakers.png')}
                            description="Your schedule seems busy today, these should support you throughout the whole day."/>
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