import React from 'react';
import traffic from '../Assets/Images/traffic.jpg';

const Greeting = props => {
    return (
        <div className="greeting-container">
            <img src={traffic} alt="Traffic at night." />
            <div className="navbar">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="links">
                    <li>About</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li><button>Take Action</button></li>
                </div>
            </div>
            <div className="greeting-text">
                <h1>Lorem Ipsum</h1>
                <button>Enter</button>
            </div>
        </div>
    )
}

export default Greeting;
