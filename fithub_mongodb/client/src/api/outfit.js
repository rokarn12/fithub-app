//checks to see if there are enough clothes in the closet, if there are, creates a user generated outfit
export const createOutfit = async ({ user, outfitName, fitHat, fitTop, fitBottom, fitShoes } = {}) => {
    const outfit = { user, outfitName, fitHat, fitTop, fitBottom, fitShoes };

    try {
        const res = await fetch (`${process.env.REACT_APP_API_URL}/createoutfit`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(outfit)
        });

        return await res.json();
    } catch (err) {
        throw new Error(`Cannot create outfit at this time. ${err}`);
    }
};

// gets outfit created by user
export const getOutfits = async (user) => {
    const username = { user };
    try { 
        const res = await fetch(`${process.env.REACT_APP_API_URL}/outfits`, { // API route
            method: "POST", // retrieve entry from database
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return res.json();
    } catch (err) { 
        throw new Error("Could not get outfit.");
    }
};