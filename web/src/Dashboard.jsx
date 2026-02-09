import React, { useEffect, useState } from 'react';
import api from './api';

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get('/user/me')
            .then(res => setUser(res.data))
            .catch(() => window.location.href = '/login');
    }, []);

    const logout = () => {
        localStorage.removeItem('auth');
        window.location.href = '/login';
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            {user ? (
                <div>
                    <p>Name: {user.fname} {user.lname}</p>
                    <p>Status: {user.status}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : <p>Loading...</p>}
        </div>
    );
}
export default Dashboard;