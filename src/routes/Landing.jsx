import React from 'react';
import Content from '../components/landing/Content';
import Inquire from '../components/landing/Inquire';
import Loginarea from '../components/landing/Loginarea';

const Landing = () => {
    return (
        <section className='relative'>
          <div className="container">
            <Loginarea />
            <Content />
          </div>
          <Inquire />
        </section>
    );
}

export default Landing;
