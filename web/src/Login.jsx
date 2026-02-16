import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from './api';
import "./Auth.css";

function Login() {
    const [creds, setCreds] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const token = 'Basic ' + btoa(`${creds.username}:${creds.password}`);
        try {
            await api.post('/auth/login', {}, { headers: { Authorization: token }});
            localStorage.setItem('auth', token);
            window.location.href = '/dashboard';
        } catch (err) {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Welcome back</h2>
                <p className="auth-subtitle">Enter your credentials to access your account</p>
                
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Username</label>
                        <input 
                            placeholder="johndoe" 
                            onChange={e => setCreds({...creds, username: e.target.value})} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            onChange={e => setCreds({...creds, password: e.target.value})} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn-main full-width">Sign In</button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <Link to="/register">Create one</Link>
                </p>
            </div>
        </div>
    );
}
export default Login;