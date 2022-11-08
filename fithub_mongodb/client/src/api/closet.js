export const addItem = async ({ user, clothingType, color, attireType } = {}) => {
    const item = { user, clothingType, color, attireType };

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