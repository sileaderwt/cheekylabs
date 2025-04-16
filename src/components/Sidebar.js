import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [visible, setVisible] = useState(false);

    const handleMouseMove = (e) => {
        if (e.clientX < 50) setVisible(true);
        else if (visible && e.clientX > 200) setVisible(false);
    };

    return (
        <div onMouseMove={handleMouseMove} className="sidebar-wrapper">
            <div className={`sidebar bg-dark text-white p-3 ${visible ? 'show' : 'hide'}`}>
                <h5 className="mb-3">Menu</h5>
                <ul className="nav flex-column">
                    <li className="nav-item"><a href="/" className="nav-link text-white">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">Visualizations</a></li>
                    <li className="nav-item"><a href="#" className="nav-link text-white">About</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
