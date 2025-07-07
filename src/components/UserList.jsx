import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/User');
                console.log(response.data);
                setUsers(response.data);   
            }
            catch (err) {
                setError('error in popping(grting) the users');
                console.error(err)
            }
        };
        fetchUsers();
    }, []);

    if (error) return <p>{error}</p>;

    return(
        <div>
            {/* <h2 Users-List></h2> */}
            <ul>
                {users.map(user=>(
                    <li key={user.name}>{user.name}(role:{user.role})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList