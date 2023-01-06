import React from 'react';
import Logo from '../media/img/cryptonly-logo.png';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='container mx-auto px-5'>
            <div className='grid md:grid-cols-5 gap-4 md:gap-10 py-14'>
                <div className='text-white col-span-2 text-center md:text-left'>
                    <div>
                        <img className='w-72 mx-auto md:mx-0' src={Logo} alt="logo" />
                    </div>
                    <p className='my-6'>Cryptonly is a Crypto & Crypto Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>

                    <div className='flex items-center justify-center md:justify-start'>
                        <a className='p-4 mr-3 bg-[#39578f] rounded-md' href='/'><FaFacebookF /></a>
                        <a className='p-4 mr-3 bg-[#39578f] rounded-md' href='/'><FaTwitter /></a>
                        <a className='p-4 mr-3 bg-[#39578f] rounded-md' href='/'><FaInstagram /></a>
                        <a className='p-4 mr-3 bg-[#39578f] rounded-md' href='/'><FaYoutube /></a>
                    </div>
                </div>

                <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
                    <ul className='grid gap-2 font-semibold'>
                        <li className='flex items-center'>
                            <MdArrowRight className='text-3xl text-[#623f69]' /> <Link to='/about'>About Us</Link>
                        </li>
                        <li className='flex items-center'>
                            <MdArrowRight className='text-3xl text-[#623f69]' /> <Link to='/pricing'>Pricing Plan</Link>
                        </li>
                        <li className='flex items-center'>
                            <MdArrowRight className='text-3xl text-[#623f69]' /><Link to='/blog'>Blog List</Link>
                        </li>
                        <li className='flex items-center'>
                            <MdArrowRight className='text-3xl text-[#623f69]' /><Link to='/roadmap'>Roadmap</Link>
                        </li>
                        <li className='flex items-center'>
                            <MdArrowRight className='text-3xl text-[#623f69]' /><Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-4'>Blog Posts</h2>
                    <div className='mb-4'>
                        <p className='font-medium mb-2'>What is cryptocurrency and how does it work.</p>
                        <p className='font-bold text-[#623f69]'>July 20, 2022</p>
                    </div>
                    <div>
                        <p className='font-medium mb-2'>A cryptocurrency is a digital currency.</p>
                        <p className='font-bold text-[#623f69]'>July 20, 2022</p>
                    </div>
                </div>

                <div className='text-white text-center md:text-left col-span-2 md:col-span-1'>
                    <h2 className='text-2xl font-bold mb-4'>Locations</h2>
                    <div>
                        <h4 className='font-medium mb-2 text-lg'>Washington DC</h4>
                        <p className='font-medium text-slate-400'>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
                    </div>
                </div>
            </div>
            <div className='border-t text-center text-white py-4 drop-shadow-xl'>
                <p>Copyright ©2023 Cryptonly. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;