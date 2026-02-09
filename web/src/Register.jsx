import React, { useState } from 'react';
import api from './api';

function Register() {
    const [formData, setFormData] = useState({
        userid: '', fname: '', lname: '', username: '', email: '', password: ''
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
            alert("Registration failed. Check if User ID or Username is taken.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <input name="userid" placeholder="User ID (PK)" onChange={handleInput} required />
            <input name="fname" placeholder="First Name" onChange={handleInput} />
            <input name="lname" placeholder="Last Name" onChange={handleInput} />
            <input name="username" placeholder="Username" onChange={handleInput} required />
            <input name="email" type="email" placeholder="Email" onChange={handleInput} />
            <input name="password" type="password" placeholder="Password" onChange={handleInput} required />
            <button type="submit">Register</button>
        </form>
    );
}
export default Register;