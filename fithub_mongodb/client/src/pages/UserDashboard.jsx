import React, {useContext} from 'react';
import { UserContext } from '../UserContext';

const UserDashboard = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="container text-center" style={{marginTop: "12rem"}}>
            <h1>FitHub</h1>
            <div className="alert alert-primary p-5">
                <h1>{user && <span className='text-success'>{user}'s</span>}{" "}
                    Personal Dashboard</h1>
            </div>
        </div>
    );
};

export default UserDashboard;