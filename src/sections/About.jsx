import React from 'react';
import Cryptonly from '../media/img/cryptonly-logo-t.png';

const About = () => {
    return (
        <section className='grid md:grid-cols-2 py-14 items-center justify-center'>
            <div>
                <img src={Cryptonly} alt="cryptonly logo" />
            </div>

            <div className='text-white text-center md:text-left'>
                <h2 className='text-4xl font-semibold'>About Cryptonly</h2>
                <p className='my-8 text-lg md:w-4/5'>A Cryptonly is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system. To use cryptocurrencies, you need a cryptocurrency wallet.</p>

                <button className='bg-[#623f69] text-white py-2 px-4 rounded-md font-bold'>
                    Purchase Tokens
                </button>
            </div>
        </section>
    );
};

export default About;