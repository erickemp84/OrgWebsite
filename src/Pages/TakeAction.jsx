import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Subscribe from '../Components/Subscribe';
import Map from '../Components/Map';
import Footer from '../Components/Footer';
import gathering from '../Assets/Images/gathering.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const TakeAction = props => {

    useEffect(() => {
        Aos.init({duration: 2000})
    })

    return (
        <>
            <Navbar />
            <div className="about-image">
                <img src={gathering} alt="A gathering of people." />   
                <div className="about-greeting">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>
            <div className="about-section-1">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a quos mollitia adipisci maiores quidem, ea aperiam debitis ratione! Vero atque laudantium dolorum minus suscipit?</h1>
            </div>
            <div data-aos="fade-right" className="about-section-2">
                <h2>Heading Here</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, molestiae laudantium velit ducimus ex deleniti nemo quas obcaecati tempora aut, aliquam saepe dolorem eos reiciendis eum sequi error voluptatum aspernatur sunt, adipisci fugiat quo magnam! Nulla rem, autem facilis maiores qui voluptates consequuntur eos possimus quasi alias quae quod cumque.</p>
            </div>
            <div data-aos="fade-left" className="about-section-3">
                <h2>Heading Here</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, molestiae laudantium velit ducimus ex deleniti nemo quas obcaecati tempora aut, aliquam saepe dolorem eos reiciendis eum sequi error voluptatum aspernatur sunt, adipisci fugiat quo magnam! Nulla rem, autem facilis maiores qui voluptates consequuntur eos possimus quasi alias quae quod cumque.</p>
            </div>
            <div className="map-container">
                <div className="map-text-block">
                    <div data-aos="fade-right" className="map-text">
                        <h1>Montly Meetup Locations</h1>
                        <h3>We look forward to seeing you there!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum ullam velit, architecto ipsam eligendi dignissimos similique culpa excepturi dolores illo autem obcaecati totam delectus explicabo saepe nam officia aut blanditiis rem magnam doloribus, reprehenderit dolore ipsa.</p>
                        <ul>
                            <li>Alpha</li>
                            <li>Beta</li>
                            <li>Charlie</li>
                            <li>Delta</li>
                            <li>Echo</li>
                        </ul>
                    </div>
                </div>
                <Map />
            </div>            
            <Subscribe />
            <Footer />
        </>
    )
}

export default TakeAction;
