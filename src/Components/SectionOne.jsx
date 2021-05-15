import React from 'react';
import camera from '../Assets/Images/camera.jpg';

const SectionOne = props => {
    return (
        <div className="section-one-container">
            <div className="section-one-left">
                <img src={camera} alt="A camera." />
            </div>
            <div className="section-one-right">
                <div className="section-one-text">
                    <h1>Dummy Text Here</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dignissimos possimus quam placeat reprehenderit accusamus quia debitis totam laborum vero illum unde dicta quisquam aliquam, dolores ducimus ex facilis corrupti?</h3>
                    <button>Clicky!</button>
                </div>
            </div>
        </div>

        );
    }

export default SectionOne;