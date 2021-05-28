import React from 'react';
import {Link} from '@reach/router';

const Navbar = props => {

    return(

        <div className="navbar">
            <div className="logo">
                <Link to="/"><h1>Logo</h1></Link>
            </div>
            <div className="links">
                <Link to="/about"><li>About</li></Link>
                <Link to="/news"><li>News</li></Link>
                <Link to="/blog"><li>Blog</li></Link>
                <li><button>Take Action</button></li>
            </div>
        </div>

    );

}

export default Navbar;