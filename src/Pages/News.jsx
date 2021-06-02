import React from 'react';
import Navbar from '../Components/Navbar';
import waves from '../Assets/Images/waves.jpg';
import Footer from '../Components/Footer';

const News = props => {
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

                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="#">Click Me!</a>
                    </div>
                </div>
                <div className="news-article">
                    <div className="news-article-image">

                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="#">Click Me!</a>
                    </div>
                </div>
                <div className="news-article">
                    <div className="news-article-image">

                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="#">Click Me!</a>
                    </div>
                </div>
                <div className="news-article">
                    <div className="news-article-image">

                    </div>
                    <div className="news-article-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="#">Click Me!</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News;