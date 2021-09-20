import React, { memo } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='relative h-screen p-10 text-white'>
      <Navbar />
      <Home />
      <div className='flex items-end justify-center mt-36 xs:mt-16'>
        <p>
          created by{' '}
          <a
            className='border-b'
            href='https://github.com/Ri5ha6h/InteriorConsultant'
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
