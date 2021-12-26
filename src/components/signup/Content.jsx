import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    function signup (event) {
        event.preventDefault()
    }
    return (
        <section className='grid grid-cols-2 my-10 backdrop-blur-md bg-white/30 text-white py-4 px-5 text-sm'>
            <div>
                <div className='text-lg'>Create your account</div>

                <form action="" className='my-5' autoComplete='off'>
                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            First Name
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Last Name
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Username
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Email
                        </span>
                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Phone Number
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Postal Address
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Password
                        </span>
                        <input type="password" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Taxpayer PIN Number
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <label class="block my-2">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            National ID Number
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-900" />
                    </label>

                    <div>
                        By registering, you agree to the
                        <span className='text-black underline decoration-lime-500 hover:bg-lime-500'><Link to='#'> Terms of service</Link></span>
                    </div>

                    <button type='submit' className='my-2 outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-lime-500 to-lime-900 text-white hover:opacity-90' onClick={signup}>Signup</button>
                </form>
            </div>

            <div className='px-6 text-xl flex items-center justify-center'>
                Some content here
            </div>
        </section>
    );
}

export default Content;
