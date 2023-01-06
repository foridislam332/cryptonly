import React from 'react';
import Cryptocurrency from '../media/img/cryptocurrency.png'

const Hero = () => {
    return (
        <section className='bg-hero-bg bg-center bg-no-repeat bg-cover h-screen'>
            <div className='grid md:grid-cols-2 justify-center items-center md:mx-20 md:py-14 pt-32'>
                {/* content box */}
                <div className='text-white'>
                    <h1 className='capitalize text-5xl text-center md:text-left md:text-7xl font-bold'>Make your life <br /> easier with <br />
                        <span className='text-[#00C4F4] capitalize'>cryptonly</span>
                    </h1>
                    <h3 className='uppercase my-8 text-lg font-medium text-center md:text-left'>Trading Strategies</h3>

                    {/* button box */}
                    <div className='flex items-center justify-center md:block'>
                        <button className='bg-[#623f69] text-white py-2 px-4 rounded-md'>
                            Pre-Sale
                        </button>
                        <button className='bg-[#623f69] text-white py-2 px-4 rounded-md ml-4'>
                            WhitePaper
                        </button>
                    </div>
                </div>

                {/* hero image */}
                <div className='p-4'>
                    <img
                        className='w-full'
                        src={Cryptocurrency}
                        alt="Cryptocurrency logo"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;