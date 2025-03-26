'use client';

import { useContext } from 'react';
import { UserContext} from '../components/UserDetails';

export default function account(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <h1>Account</h1>
            {user ? ( 
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
            <div><p>No details found</p></div>)}
        </div>
    )
}