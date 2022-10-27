import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './css/home.css';

import {
    Button
} from '@mui/material';

import ItemCard from './../components/ItemCard.jsx';
import { textAlign } from "@mui/system";

const Home = () => {

    // var outfit_counter = 0;
    const outfits = [
        ["White", "Grey", "MidnightBlue", "SlateGrey"],
        ["Red", "Grey", "SlateGrey", "White"],
        ["Orange", "Grey", "SlateGrey", "White"],
        ["Yellow", "Grey", "SlateGrey", "White"],
    ]


    const [color1, setStyle_item1] = useState("Red");
    const [color2, setStyle_item2] = useState("White");
    const [color3, setStyle_item3] = useState("Brown");
    const [color4, setStyle_item4] = useState("Grey");
    const [ani, animate1] = useState("outfit1");
    const [outfit_counter, increase] = useState(0);

    // var buttonDisabled = False;
    // var item1_color = "Red" ;

    const changeStyle = (event) => {
        console.log("clicked button", outfit_counter);
        // start animation state
        
        animate1("outfit2");
        // event.currentTarget.disabled = true;

        // change everything
        setTimeout(function(){

            console.log("2");
            setStyle_item1(outfits[outfit_counter][0]);
            setStyle_item2(outfits[outfit_counter][1]);
            setStyle_item3(outfits[outfit_counter][2]);
            setStyle_item4(outfits[outfit_counter][3]);
        },1000);
        
        // return back to the original state
        setTimeout(function(){
            console.log("3");
            animate1("outfit1");
            
        },2000);
        setTimeout(function(){
            console.log(outfit_counter);
            // event.currentTarget.disabled = false;
            // outfit_counter++;
        }, 2000);
        // outfit_counter++;
        if (outfit_counter == outfits.length - 1) {
            increase(0);
        } else {
            increase(outfit_counter + 1);
        }
        
    } 

    return (
       
        <div id="main" className="container text-center" style={{marginTop: "1rem"}}>
            <div >
                <div id='back1' className="container mt-5 mb-5">
                    <h1>FitHub</h1>
                    <h2>Expect more from your clothes.</h2>
                    <p id="description">&ensp;&ensp;&ensp;How long does it take to figure out what to wear in the morning? 
                        How many pieces of clothes do you have? Can you even estimate it? 
                        Exactly. How are you supposed to pair the perfect top with the perfect bottom, 
                        in a timely fashion, without knowing every single item in your closet or dresser? 
                        That’s why we created FitHub, a hub for all of your outfits. Our easy-to-use interface 
                        allows you to input your clothes into the virtual closet, so you don’t have to tear 
                        apart your wardrobe looking for ideas on what to wear. Our software also lets you mix 
                        and match clothes, favorite outfits, plan outfits for the week, and our exclusive color 
                        algorithm will recommend clothes that will go well with the type of event, and the rest 
                        of your fit. Don’t waste any more time cleaning up after trying on too many outfits. Try out the
                        outfit generator below!</p>
                </div>
                <div id='back2' className="container mt-5 mb-5 col-lg">
                    <div className={ani}>
                        <ItemCard article='Hat' color ={color1} type='Casual' img_src={require('./images/cap.png')}
                                description="It's looking pretty sunny out today. We want to make sure you're looking stylish and protected!"/>
                        <ItemCard article='Shirt' color ={color2} type='Casual' img_src={require('./images/tshirt.png')}
                                description="We love this T-shirt, it has a light color to contrast your hat and shorts, what do you think?"/>
                        <ItemCard article='Shorts' color ={color3} type='Casual' img_src={require('./images/shorts.png')}
                                description="These shorts match your other clothing perfectly!"/>
                        <ItemCard article='Shoes' color ={color4} type='Casual' img_src={require('./images/sneakers.png')}
                                description="Your schedule seems busy today, these should support you throughout the whole day."/>
                    </div>
                </div>            
                <div>
                    <p>Try out the outfit generator!</p>
                    <Button variant="contained" size="large" onClick={changeStyle}>
                        Generate New Outfit!
                    </Button>
                    <br></br>
                </div>
            </div>
            <div className="text-center col-lg"> 
                <br></br>   
                <p>Ready to try it? Sign up below!</p>
                <Link className="nav-link" to="/signup">
                    <Button variant="contained">
                                Sign Up
                    </Button>
                </Link>
                <br></br>
                <p>Already a user? Login below!</p>
                <Link className="nav-link" to="/login">
                    <Button variant="contained">
                                Login
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;