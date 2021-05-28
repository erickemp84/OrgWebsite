import React from 'react';
import Greeting from '../Components/Greeting';
import Navbar from '../Components/Navbar';
import Introduction from '../Components/Introduction';
import SectionOne from '../Components/SectionOne';
import SectionTwo from '../Components/SectionTwo';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';

const Home = props => {
    return(

        <>
            <Navbar />
            <Greeting />
            <Introduction />
            <SectionOne />
            <SectionTwo />
            <Subscribe />
            <Footer />
        </>

        );
}

export default Home;