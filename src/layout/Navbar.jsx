import React, { useState } from 'react';
import Logo from '../media/img/cryptonly-logo.png';
import { HiMenu } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <header className='container mx-auto'>
            <nav className='h-14 max-w-7xl mx-auto rounded-full m-2 px-5 fixed w-full'>
                <ul className='h-full hidden md:flex items-center justify-between text-white font-medium gap-3'>
                    <div className='flex-1'>
                        <img src={Logo} className='w-60' alt="Cryptonly logo" />
                    </div>

                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/cryptonly'>Cryptonly</Link>
                    </li>
                    <li>
                        <Link to='/token-details'>Token Details</Link>
                    </li>
                    <li>
                        <Link to='/docs'>Docs</Link>
                    </li>
                    <li>
                        <Link to='/roadmap'>Roadmap</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <button className='bg-[#623f69] text-white py-2 px-4 rounded-md ml-3'>
                        Pre-Sale
                    </button>
                </ul>
            </nav>

            {/*responsive mobile menu */}
            <nav className='md:hidden fixed w-full'>
                <div className='flex items-center justify-between text-white bg-[#110a44] p-4'>
                    <img src={Logo} className='w-48' alt="Cryptonly logo" />
                    <button onClick={() => setShow(!show)}>
                        <HiMenu size='24px' />
                    </button>
                </div>

                <ul className={`text-white font-medium grid grid-cols-1 gap-y-2 bg-[#110a44] shadow-xl text-center pb-6 ${show ? 'block' : 'hidden'}`}>
                    <button className='ml-auto p-3 mr-1 text-red-400' onClick={() => setShow(!show)}>
                        <RiCloseCircleFill size='24px' />
                    </button>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/cryptonly'>Cryptonly</Link>
                    </li>
                    <li>
                        <Link to='/token-details'>Token Details</Link>
                    </li>
                    <li>
                        <Link to='/docs'>Docs</Link>
                    </li>
                    <li>
                        <Link to='/roadmap'>Roadmap</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <button className='bg-[#623f69] text-white py-2 rounded-md mx-8'>
                        Pre-Sale
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;