import classNames from 'classnames';
import React, { useState } from 'react';

const Inquire = () => {
    const [inquire, setInquire] =  useState(false);

    const inquireClass = classNames({ hidden: !inquire })

    const bounceClass = classNames({ 'animate-bouce': !inquire })

    function toggleInquire () {
        if (inquire) setInquire(false)

        else setInquire(true)
    }

    function sendMessage (event) {
        event.preventDefault()

        setInquire(false)
    }

    return (
        <section>
            <section className={`${inquireClass} fixed right-0 bottom-0 top-0 left-0 backdrop-blur-sm bg-white/10`}></section>
            <section className='fixed right-3 bottom-5'>
                <form action="" className={`${inquireClass} bg-white text-slate-700 text-sm shadow-xl py-4 px-5 relative mb-10`} autoComplete='off'>
                    <div className='text-lg text-slate-900 mb-3'>Contact Support</div>

                    <div><span className='font-semibold'>Call:</span> (+256) 753 659 098</div>

                    <div className='my-1'><span className='font-semibold'>Email:</span> info@uia.ug</div>

                    <div className='my-4 text-slate-900 font-medium'>Send a direct message</div>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Email
                        </span>
                        <input type="email" name="email" class="mt-1 px-3 py-1.5 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-sm sm:text-sm focus:ring-1" />
                    </label>

                    <label class="block my-1">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Subject
                        </span>
                        <input type="text" name="email" class="mt-1 px-3 py-1.5 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-sm sm:text-sm focus:ring-1" />
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                            Message
                        </span>
                        <textarea type="text" name="email" rows='4' class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:ring-sky-400 block w-full rounded-sm sm:text-sm focus:ring-1 resize-none" />
                    </label>

                    <button type='submit' className='mt-2 outline-none rounded text-sm py-1 px-4 bg-gradient-to-b from-lime-500 to-lime-900 text-white hover:opacity-90' onClick={sendMessage}>Send message</button>
                </form>

                <div onClick={toggleInquire} className={`${bounceClass} w-8 h-8 rounded-full bg-gradient-to-b from-lime-500 to-lime-900 flex justify-center items-center cursor-pointer absolute right-1 bottom-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </section>
        </section>
    );
}

export default Inquire;
