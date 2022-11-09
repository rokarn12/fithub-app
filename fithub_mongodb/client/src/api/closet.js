export const addItem = async ({ user, itemName, clothingType, color, attireType } = {}) => {
    const item = { user, itemName, clothingType, color, attireType };

    try {
        const res = await fetch (`${process.env.REACT_APP_API_URL}/additem`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });

        return await res.json();
    } catch (err) {
        throw new Error(`Cannot add item at this time. ${err}`);
    }
};

export const getItems = async ({ user } = {}) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/items`, {
            method: "GET",
            credentials: "include",
            //body: JSON.stringify(username)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get items.");
    }
};

export const getHats = async ({ user } = {}) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/hats`, {
            method: "GET",
            credentials: "include",
            //body: JSON.stringify(username)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get hats.");
    }
};

export const getShirts = async ({ user } = {}) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/shirts`, {
            method: "GET",
            credentials: "include",
            //body: JSON.stringify(username)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get shirts.");
    }
};

export const getPants = async ({ user } = {}) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/pants`, {
            method: "GET",
            credentials: "include",
            //body: JSON.stringify(username)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get pants.");
    }
};

export const getShoes = async ({ user } = {}) => {
    const username = { user };
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/shoes`, {
            method: "GET",
            credentials: "include",
            //body: JSON.stringify(username)
        });
        return res.json();
    } catch (err) {
        throw new Error("Could not get shoes.");
    }
};