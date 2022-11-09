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