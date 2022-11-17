import React, {useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import './css/home.css';
import ItemCard from '../components/ItemCard.jsx';

// import CompactItemCard from '../';
import { getItems } from "../api/closet";

import {
    Button
} from '@mui/material';


const ECloset = () => { 

    // state variables
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    const [allItems, setAllItems] = useState([]);
    const [sortType, setSortType] = useState("Alphabetical");

    // get items from database and filter by user name
    const handlegetItems = async (e) => {
        e.preventDefault();
        try {
            const res = await getItems({user});
            console.log("successfully got user items");
            if (res.error) toast.error(res.error);
            else {
                // display success message
                toast.success(res.message);
                // redirect user back to add item page
                navigate('/ecloset', {replace: true});
                // use set state to update variable
                setAllItems(res.items);
            }
        } catch (err) {
            console.log(err);
            navigate('/userdashboard', {replace: true});
            toast.error(err);
        }
    };
    
    // sort function
    const sortBy = async (e) => {
          // sort by alphabetical order 
          function byNameAlpha( a, b ) {
            if ( a.itemName < b.itemName ){
              return -1;
            }
            if ( a.itemName > b.itemName ){
              return 1;
            }
            return 0;
          }

          // sort by clothing type name
          function byClothingType( a, b ) {
            if ( a.clothingType < b.clothingType ){
              return -1;
            }
            if ( a.clothingType > b.clothingType ){
              return 1;
            }
            return 0;
          }

          // sort bu color
          function byColor( a, b ) {
            if ( a.color < b.color ){
              return -1;
            }
            if ( a.color > b.color ){
              return 1;
            }
            return 0;
          }

          // sort by attire type
          function byAttire( a, b ) {
            if ( a.attireType < b.attireType ){
              return -1;
            }
            if ( a.attireType > b.attireType ){
              return 1;
            }
            return 0;
          }
          e.preventDefault();
          try {
              // get items 
              const res = await getItems({user});
              console.log("successfully got user items");
              if (res.error) toast.error(res.error);
              else {
                  toast.success(res.message);
                  // redirect user back to add item page
                  navigate('/ecloset', {replace: true});
                  // apply sorting
                  if (sortType === "ClothingType") setAllItems((res.items).sort(byClothingType));
                  else if (sortType === "Color") setAllItems((res.items).sort(byColor));
                  else if (sortType === "Attire") setAllItems((res.items).sort(byAttire));
                  else if (sortType === "Alphabetical") setAllItems((res.items).sort(byNameAlpha));
              }
          } catch (err) {
              console.log(err);
              navigate('/userdashboard', {replace: true});
              toast.error(err);
          }
    }

    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div className="container mt-5 mb-5 col-lg">
                <div id="dashboard">
                    <h1>E-Closet</h1>
                </div>   
                <div id="line"></div>
                <Button id="button" variant="contained" size="large" onClick={handlegetItems} style={{backgroundColor: "rgba(0, 110, 255, 1)"}} >
                    Refresh E-Closet
                </Button>
                {/* dropdown for sorting */}
                <div id='sorting' className="container">
                    <label for="sortType">Attire Type:&ensp;</label>
                    <select name="sortType" id="sort" value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="Alphabetical">Alphabetical</option>
                    <option value="ClothingType">Clothing Type</option>
                    <option value="Color">Color</option>
                    <option value="Attire">Attire Type</option>
                    </select>
                </div>
                <Button id="button" variant="contained" size="large" onClick={sortBy} style={{backgroundColor: "rgba(0, 37, 87, 1)"}} >
                    Sort
                </Button>
                <div>
                    {allItems.map((item) => (
                        <ItemCard inCloset = {true} article = {item.clothingType} color = {item.color} type = {item.attireType} name = {item.itemName}/>
                    ))}
                </div>
            </div>            
        </div>
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View E-Closet</h1>
            </div>
        </div> 
    )));
};

export default ECloset;