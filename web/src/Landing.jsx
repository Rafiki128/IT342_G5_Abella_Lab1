import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate;
    
    return (
        <div className="landing-body">
            <div className="welcome-card">
                <h1>Welcome</h1>
                <button className="btn-primary" onClick={() => navigate('/login')}>Login</button>
                <button className="btn-primary" style={{backgroundColor: '#10b981'}} onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
}

export default Landing;