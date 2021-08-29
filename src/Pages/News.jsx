import React, {useEffect} from 'react';
import Navbar from '../Components/Navbar';
import waves from '../Assets/Images/waves.jpg';
import Footer from '../Components/Footer';
import guitar from '../Assets/Images/guitar (2).jpg';
import girl from '../Assets/Images/girl.jpg';
import gadgets from '../Assets/Images/gadgets.jpg';
import mustang from '../Assets/Images/mustang.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const News = props => {

    useEffect(() => {
        Aos.init({duration: 2000})
    })

    return(

        <>
            <Navbar />
            <div className="news-image">
                <img src={waves} alt="Ocean waves." />   
                <div className="news-greeting">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>
            <div className="news-block">
                <div className="news-article">
                    <div className="news-article-image">
                        <img src={guitar} alt="A blue guitar." />  
                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=J---aiyznGQ" target="_blank" rel="noreferrer"><button>Read More</button></a>
                    </div>
                </div>
                <div className="news-article">
                    <div data-aos="fade-right" data-aos-once="true" className="news-article-image">
                        <img src={girl} alt="A girl looking at her phone." />
                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=J---aiyznGQ" target="_blank" rel="noreferrer"><button>Read More</button></a>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-once="true" className="news-article">
                    <div className="news-article-image">
                        <img src={gadgets} alt="Different tech gadgets on a table." />
                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=J---aiyznGQ" target="_blank" rel="noreferrer"><button>Read More</button></a>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-once="true" className="news-article">
                    <div className="news-article-image">
                        <img src={mustang} alt="A customized sports car." />
                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=J---aiyznGQ" target="_blank" rel="noreferrer"><button>Read More</button></a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News;