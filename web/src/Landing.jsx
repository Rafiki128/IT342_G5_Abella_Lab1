import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css";

function Landing() {
    const navigate = useNavigate(); // Fixed: added parentheses
    
    return (
        <div className="landing-container">
            {/* Background Decorative Elements */}
            <div className="abstract-circle"></div>
            
            <nav className="landing-nav">
            </nav>

            <main className="hero-section">
                <div className="hero-content">
                    <h1><span>Welcome!</span></h1> 
                    <div className="button-group">
                        <button className="btn-main" onClick={() => navigate('/register')}>
                            Get Started
                        </button>
                        <button className="btn-outline" onClick={() => navigate('/login')}>
                            Sign In
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Landing;