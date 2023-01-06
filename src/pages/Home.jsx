import React from 'react';
import About from '../sections/About';
import Hero from '../sections/Hero';
import TrustUs from '../sections/TrustUs';
import Works from '../sections/Works';

const Home = () => {
    return (
        <>
            {/* hero section  */}
            <Hero />

            {/* about section  */}
            <About />

            {/* works section  */}
            <Works />

            {/* trust us section  */}
            <TrustUs />
        </>
    );
};

export default Home;