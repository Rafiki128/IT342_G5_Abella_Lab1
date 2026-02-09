import React, { useState } from 'react';
import api from './api';

function Login() {
    const [creds, setCreds] = useState({ username: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        const token = 'Basic ' + btoa(`${creds.username}:${creds.password}`);
        try {
            // We test the token by calling the login endpoint
            await api.post('/auth/login', {}, { headers: { Authorization: token }});
            localStorage.setItem('auth', token);
            window.location.href = '/dashboard';
        } catch (err) {
            alert("Invalid username or password");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input placeholder="Username" onChange={e => setCreds({...creds, username: e.target.value})} />
            <input type="password" placeholder="Password" onChange={e => setCreds({...creds, password: e.target.value})} />
            <button type="submit">Login</button>
        </form>
    );
}
export default Login;