import React from 'react';
import Cryptocurrency from '../media/img/Cryptocurrency_Mobile.png';

const Works = () => {
    return (
        <section className='container mx-auto'>
            <div className='grid md:grid-cols-2 py-14 items-center justify-center'>
                <div className='text-white text-center md:text-left md:ml-6 mx-4 m:mx-0'>
                    <h2 className='text-4xl font-semibold'>How It Works?</h2>

                    <p className='my-10 text-lg md:w-4/5'>In just 4 easy steps, ypu save yourself time, money and make an informed decision that'll help you create the future you want using the latest techonologys.</p>

                    <div className='grid md:grid-cols-2 gap-4 shadow-xl'>
                        <div className='bg-[#39578f] text-white py-2 pl-4 pr-8 rounded-md'>
                            <h3 className='font-medium mb-2'>For Free</h3>
                            <p className='text-sm'>You don't read pay for anything</p>
                        </div>

                        <div className='bg-[#39578f] text-white py-2 pl-4 pr-8 rounded-md'>
                            <h3 className='font-medium mb-2'>Swipe Unlimited times</h3>
                            <p className='text-sm'>You don't read pay for anything</p>
                        </div>

                        <div className='bg-[#39578f] text-white py-2 pl-4 pr-8 rounded-md'>
                            <h3 className='font-medium mb-2'>Token Test</h3>
                            <p className='text-sm'>SQT token generation event
                                Public incentivize testnet launch</p>
                        </div>

                        <div className='bg-[#39578f] text-white py-2 pl-4 pr-8 rounded-md'>
                            <h3 className='font-medium mb-2'>For Research</h3>
                            <p className='text-sm'>SubQuery Builders/Grants Program
                                SQT Network contract internal</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Cryptocurrency} alt="cryptonly logo" />
                </div>
            </div>
        </section>
    );
};

export default Works;