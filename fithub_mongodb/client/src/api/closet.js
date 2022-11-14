// function to add an item to the database
export const addItem = async ({ user, itemName, clothingType, color, attireType } = {}) => {
    const item = { user, itemName, clothingType, color, attireType }; // build item based on user info/inputs

    try { // try/catch block to avoid errors
        const res = await fetch (`${process.env.REACT_APP_API_URL}/additem`, { // API route
            method: 'POST', // post entry to database in JSON form
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });

        return await res.json(); // wait for response
    } catch (err) { // if we could not get a response, throw an error
        throw new Error(`Cannot add item at this time. ${err}`);
    }
};

export const removeItem = async ({ user, itemName, clothingType, color, attireType } = {}) => {
    const item = { user, itemName, clothingType, color, attireType }; // build item based on user info/inputs

    try { // try/catch block to avoid errors
        const res = await fetch (`${process.env.REACT_APP_API_URL}/removeitem`, { // API route
            method: 'POST', // post entry to database in JSON form
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });

        return await res.json(); // wait for response
    } catch (err) { // if we could not get a response, throw an error
        throw new Error(`Cannot remove item at this time. ${err}`);
    }
};

// function to get user's items
export const getItems = async (user) => {
    //const username = { user }; // username is passed in as argument
    console.log("user is: ", user.user);
    try { // try/catch block to avoid errors
        const res = await fetch(`${process.env.REACT_APP_API_URL}/items`, { // API route
            method: "POST", // retrieve entry from database
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        return res.json();
    } catch (err) { // if we could not get a response, throw an error
        console.log("got an error");
        throw new Error("Could not get items.");
    }
};

export const getHats = async (user) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/hats`, {
            method: "POST", // retrieve entry from database
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get hats.");
    }
};

export const getShirts = async (user) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/shirts`, {
            method: "POST", // retrieve entry from database
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get shirts.");
    }
};

export const getPants = async (user) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/pants`, {
            method: "POST", // retrieve entry from database
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get pants.");
    }
};

export const getShoes = async (user) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/shoes`, {
            method: "POST", // retrieve entry from database
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get shoes.");
    }
};