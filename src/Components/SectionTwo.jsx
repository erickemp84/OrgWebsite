import React from 'react';
import work from '../Assets/Images/work.jpg';
import {Link} from '@reach/router';

const SectionTwo = props => {
    return (
        <div className="section-two-container">
            <div className="section-two-left">
            <div className="section-two-text">
                    <h1>Dummy Text Here</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dignissimos possimus quam placeat reprehenderit accusamus quia debitis totam laborum vero illum unde dicta quisquam aliquam, dolores ducimus ex facilis corrupti?</h3>
                    <Link to="/blog"><button>Blog</button></Link>
                </div>
            </div>
            <div className="section-two-right">
                <img src={work} alt="Typing on a computer." />
            </div>
        </div>
    )
}

export default SectionTwo;