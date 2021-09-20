import React, { memo } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='p-3 text-white md:p-7'>
      <Navbar />
      <Home />
      <div className='flex items-end justify-center mt-20 xs:mt-16'>
        <p>
          created by{' '}
          <a
            className='border-b'
            href='https://devchallenges.io/portfolio/Ri5ha6h'
            target='_blank'
          >
            Rishabh Malik
          </a>{' '}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default memo(App);
