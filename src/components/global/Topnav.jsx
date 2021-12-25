import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Topnav = () => {
    return (
        <section className='h-20 flex justify-between bg-white'>
            <Link to='/'>
                <img src={logo} className='object-cover' style={{height: '90px'}} alt="uia-logo" />
            </Link>
            <div className='flex items-end mr-2'>
                <Link className='mr-4 font-semibold text-gray-600 hover:text-blue-500' to='#'>F.A.Q.</Link>
                <button className='mr-4 outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-red-500 to-red-900 text-white hover:opacity-90'>Log In</button>
                <button className='outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-red-500 to-red-900 text-white hover:opacity-90'>Sign Up</button>
            </div>
        </section>
    );
}

export default Topnav;
