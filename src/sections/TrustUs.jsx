import React from 'react';
import Friend from '../media/img/friend.svg';
import Wallet from '../media/img/wallet.svg';

const TrustUs = () => {
    return (
        <section className='bg-white py-20'>
            <div className='container mx-auto px-5'>
                <div className='text-center'>
                    <h1 className='text-6xl text-[#110a44] font-semibold mb-5'>Why Trust Us?</h1>
                    <p className='text-xl text-[#7E87BF] font-medium'>Trust comes from experience. Many of the pleased customers <br /> may function as a guide for you.</p>
                </div>

                <div className='grid md:grid-cols-2 gap-5 mt-8'>
                    <div className='bg-[#110a44] rounded-lg text-white md:flex text-center md:text-left shadow-2xl px-5'>
                        <div className='pt-5 w-44'>
                            <img className='mx-auto' src={Wallet} alt="Wallet" />
                        </div>
                        <div className='py-6 md:ml-6'>
                            <h2 className='text-2xl font-bold'>Buy Cryptocurrency with cash</h2>
                            <p className='font-medium my-3 md:w-4/5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                            <button className='bg-[#623f69] text-white py-2 px-4 rounded-md font-bold'>
                                Read More...
                            </button>
                        </div>
                    </div>

                    <div className='bg-[#110a44] rounded-lg text-white md:flex text-center md:text-left shadow-2xl px-5'>
                        <div className='pt-5 w-44'>
                            <img className='mx-auto' src={Friend} alt="Friend" />
                        </div>
                        <div className='py-6 md:ml-6'>
                            <h2 className='text-2xl font-bold'>Cryptocurrency Consultancy</h2>
                            <p className='font-medium my-3 md:w-4/5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                            <button className='bg-[#623f69] text-white py-2 px-4 rounded-md font-bold'>
                                Read More...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustUs;