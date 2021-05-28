import React from 'react';
import traffic from '../Assets/Images/traffic.jpg';
import {Link} from '@reach/router';

const Greeting = props => {
    return (
        <div className="greeting-container">
            <img src={traffic} alt="Traffic at night." />            
            <div className="greeting-text">
                <h1>Lorem Ipsum</h1>
                <Link to="/about"><button>About</button></Link>
            </div>
        </div>
    )
}

export default Greeting;
