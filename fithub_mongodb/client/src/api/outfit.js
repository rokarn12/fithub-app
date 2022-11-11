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