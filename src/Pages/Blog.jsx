import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import world from '../Assets/Images/world.jpg';
import meeting from '../Assets/Images/meeting.jpg';
import meeting2 from '../Assets/Images/meeting2.jpg';
import office from '../Assets/Images/office.jpg';
import office2 from '../Assets/Images/office2.jpg';
import office3 from '../Assets/Images/office3.jpg';


const Blog = props => {
    return(

        <>
            <Navbar />
            <div className="blog-image">
                <img src={world} alt="The Earth at night time from space." />   
                <div className="blog-greeting">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>
            <div className="blog-block">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src={office} alt="An office environment." />
                    </div>
                    <div className="blog-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Click Me!</a>
                    </div>
                </div>
            </div>
            <div className="blog-block">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src={office2} alt="Another office environment." />
                    </div>
                    <div className="blog-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Click Me!</a>
                    </div>
                </div>
            </div>
            <div className="blog-block">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src={meeting2} alt="Another meeting in an office." />
                    </div>
                    <div className="blog-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Click Me!</a>
                    </div>
                </div>
            </div>
            <div className="blog-block">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src={office3} alt="An office space." />
                    </div>
                    <div className="blog-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Click Me!</a>
                    </div>
                </div>
            </div>
            <div className="blog-block">
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src={meeting} alt="A meeting in an office." />
                    </div>
                    <div className="blog-heading">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit eaque officia doloremque sequi veniam itaque labore, quisquam quibusdam vitae provident quo accusamus aliquam quos doloribus eos architecto. Nulla fuga possimus ducimus!
                        </p>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Click Me!</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    
    );
}

export default Blog;