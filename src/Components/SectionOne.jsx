import React, {useEffect} from 'react';
import {Link} from '@reach/router';
import camera from '../Assets/Images/camera.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const SectionOne = props => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    return (
        <div className="section-one-container">
            <div className="section-one-left">
                <img src={camera} alt="A camera." />
            </div>
            <div className="section-one-right">
                <div data-aos="fade-left" className="section-one-text">
                    <h1>Dummy Text Here</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dignissimos possimus quam placeat reprehenderit accusamus quia debitis totam laborum vero illum unde dicta quisquam aliquam, dolores ducimus ex facilis corrupti?</h3>
                    <Link to="/news"><button>News</button></Link>
                </div>
            </div>
        </div>

        );
    }

export default SectionOne;