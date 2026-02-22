import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
import './Dashboard.css';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/user/me')
            .then(res => setUser(res.data))
            .catch(() => navigate('/login'));
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    };

    if (!user) return <div className="loading-screen">Loading...</div>;

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">Brand<span>.</span></div>
                <nav className="side-nav">
                    <a href="#" className="active">Overview</a>
                    <a href="#">Projects</a>
                    <a href="#">Settings</a>
                </nav>
                <button className="btn-logout" onClick={logout}>
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="top-bar">
                    <h2>Welcome back, {user.fname}!</h2>
                    <div className="user-profile">
                        <div className="avatar">{user.fname[0]}</div>
                    </div>
                </header>

                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Profile Info</h3>
                        <p><strong>Full Name:</strong> {user.fname} {user.lname}</p>
                        <p><strong>Account Status:</strong> <span className="status-badge">{user.status}</span></p>
                    </div>
                    
                    {/* Placeholder cards to show the layout */}
                    <div className="stat-card">
                        <h3>Activity</h3>
                        <p className="placeholder-text">No recent activity to show.</p>
                    </div>
                    <div className="stat-card">
                        <h3>Notifications</h3>
                        <p className="placeholder-text">You're all caught up!</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;