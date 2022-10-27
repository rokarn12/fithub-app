import React, {useContext} from 'react';
import { UserContext } from '../UserContext';

const UserDashboard = () => {
    const {user} = useContext(UserContext);
    return ((user ? ( // user is logged in, show their dashboard
        <div className="container text-center">
            <div className="alert alert-primary p-5">
                <h1>{user && <span className='text-success'>{user}'s</span>}{" "}
                    Personal Dashboard</h1>
            </div>
        </div>
        // add user dashboard functionality here
    ) : ( // user is not logged in, show this message
        <div className="container text-center">
            <div className="alert alert-danger p-5">
                <h1>Please Login to View Dashboard</h1>
            </div>
        </div> 
    )));
};

export default UserDashboard;