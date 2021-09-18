import React, { memo } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='relative h-screen p-10 overflow-hidden text-white bg-black'>
      <Navbar />
      <Home />
    </div>
  );
};

export default memo(App);
