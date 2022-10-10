export const register = async ({ username, email, password } = {}) => {
    const user = { username, email, password };

    try {
        const res = await fetch (`${process.env.REACT_APP_API_URL}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        return await res.json();
    } catch (err) {
        throw new Error(`Cannot register at this time. ${err}`);
    }
};