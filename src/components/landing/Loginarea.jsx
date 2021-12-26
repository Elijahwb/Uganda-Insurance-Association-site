import React from 'react';
import { Link } from 'react-router-dom';

const Loginarea = () => {
    function login (event) {
        event.preventDefault()
    }

    return (
        <section className='my-10 backdrop-blur-md bg-white/30 text-white py-4 px-5 text-sm'>
           <div className='text-lg'>Login to your account</div>

           <div className="grid grid-cols-2">
                <div className='w-full pr-4'>
                    <form action="" className='my-5' autoComplete='off'>
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                                Username or Email
                            </span>
                            <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" placeholder="Enter username or email" />
                        </label>
                        <label class="block my-5">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                                Password
                            </span>
                            <input type="password" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                        </label>

                        <button type='submit' className='outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-lime-500 to-lime-900 text-white hover:opacity-90' onClick={login}>Login</button>
                    </form>

                    <div>
                        Don't have an account?
                        <span className='text-black underline decoration-lime-500 hover:bg-lime-500'><Link to='#'> Create a free account</Link></span>
                    </div>

                    <div>
                        Forgot your password?
                        <span className='text-black underline decoration-lime-500 hover:bg-lime-500'><Link to='#'> Reset it here</Link></span>
                    </div>
                </div>

                <div className='flex flex-col px-4 border-l border-slate-300'>
                    <div className='w-full my-4 text-center text-md'>Want to get a Quick Quote or File a Claim on an existing policy?</div>
                    <div className='flex-1 flex items-center justify-center'>
                        <button className='mr-4 outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-lime-500 to-lime-900 text-white hover:opacity-90'>Get a Quick Quote</button>
                        <button className='outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-red-500 to-red-900 text-white hover:opacity-90'>File a Claim</button>
                    </div>
                </div>
           </div>
        </section>
    );
}

export default Loginarea;
