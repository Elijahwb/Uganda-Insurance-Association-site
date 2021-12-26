import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Topnav = () => {
    const [menu, setMenu] = useState(false)

    const hide = classNames({hidden: !menu})

    function toggleMenu () {
        if(menu) setMenu(false)

        else setMenu(true)
    }

    return (
        <section className='h-20 flex justify-between bg-white pb-1.5'>
            <Link to='/'>
                <img src={logo} className='object-cover h-full' alt="uia-logo" />
            </Link>
            <div className='hidden md:flex items-end mr-2'>
                <Link className='mr-4 font-semibold text-gray-600 hover:text-lime-500' to='#'>F.A.Q.</Link>
                <Link to='/' className='mr-4 outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-red-500 to-red-900 text-white hover:opacity-90'>LogIn</Link>
                <Link to='/signup' className='outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-red-500 to-red-900 text-white hover:opacity-90'>SignUp</Link>
            </div>

            <div className='flex items-center mr-2 md:hidden'  onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>

            <div className={`${hide} flex flex-col justify-between absolute right-0 left-0 top-0 bottom-0 bg-slate-200 z-10 py-5 px-4 md:hidden`}>
                <div>
                    <div className='flex justify-end items-center' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-red-600" fill="none" viewBox="0 0 24 24" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <Link className='my-3 block font-semibold text-slate-900 text-lg text-center hover:text-lime-500' to='#' onClick={toggleMenu}>F.A.Q.</Link>
                    <Link to='/' className='my-3 block outline-none rounded text-lg text-center py-1 font-semibold text-slate-900 hover:opacity-90' onClick={toggleMenu}>Log In</Link>
                    <Link to='/signup' className='my-3 block outline-none rounded text-lg text-center py-1 font-semibold text-slate-900 hover:opacity-90' onClick={toggleMenu}>Sign Up</Link>
                </div>

                <img src={logo} className='object-cover h-30' alt="uia-logo" />
            </div>
        </section>
    );
}

export default Topnav;
