import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from './api';
import "./Auth.css";

function Register() {
    const [formData, setFormData] = useState({
        fname: '', lname: '', username: '', email: '', password: ''
    });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', formData);
            alert("Registered successfully!");
        } catch (err) {
            alert("Registration failed. Check if Username or Email is already taken.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card wide-card">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join us today!</p>
                
                <form className="auth-form grid-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>First Name</label>
                        <input name="fname" placeholder="Jane" onChange={handleInput} />
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input name="lname" placeholder="Doe" onChange={handleInput} />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input name="email" type="email" placeholder="name@company.com" onChange={handleInput} required />
                    </div>
                    <div className="input-group">
                        <label>Username</label>
                        <input name="username" placeholder="janedoe" onChange={handleInput} required />
                    </div>
                    <div className="input-group grid-span-2">
                        <label>Password</label>
                        <input name="password" type="password" placeholder="••••••••" onChange={handleInput} required />
                    </div>
                    <button type="submit" className="btn-main full-width grid-span-2">Register</button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
}
export default Register;