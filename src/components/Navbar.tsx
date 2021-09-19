import React, { memo, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className='flex justify-between'>
        <ul>
          <li className='p-2 text-sm border font-extralight'>
            THIS INTERIOR
          </li>
        </ul>
        <ul className='hidden text-lg font-bold cursor-pointer sm:flex space-x-14'>
          <li className='border-b-2'>Home</li>
          <li>Collection</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className='sm:hidden'>
          <li className='cursor-pointer'>
            <FiMenu
              className='w-10 h-10'
              onClick={() => setMenu(true)}
            ></FiMenu>
          </li>
        </ul>
      </div>
      {menu && (
        <div className='absolute top-0 left-0 right-0 z-10 h-screen mx-8 my-6 bg-black'>
          <div className='relative p-3'>
            <AiOutlineClose
              className='absolute right-0 w-10 h-10 text-white cursor-pointer'
              onClick={() => setMenu(false)}
            ></AiOutlineClose>
          </div>
          <div className='flex justify-center mt-48'>
            <ul className='flex flex-col items-center justify-center space-y-10 text-2xl font-bold tracking-wider cursor-pointer'>
              <li className='border-b-2'>Home</li>
              <li>Collection</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Navbar);
