import React, { FC, memo } from 'react';
import profile from '../images/photo2.png';

interface CardProps {
  className?: string;
}

const Card: FC<CardProps> = ({ className }) => {
  return (
    <div
      className={
        'mt-12 xs:mt-0 w-72 xs:w-80 md:w-96 p-4 bg-white text-black xs:text-white xs:bg-black rounded-md ' +
        className
      }
    >
      <div className='flex items-center'>
        <div>
          <img
            className='w-16 h-16 rounded-full'
            src={profile}
            alt='profile pic'
          />
        </div>
        <div className='ml-5'>
          <h3 className='text-sm font-medium'>
            Aliza Webber
          </h3>
          <span className='text-xs font-medium text-gray-500'>
            Interior Designer
          </span>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-2xl font-bold'>
          Designed in 2020 by Aliza Webber
        </p>
      </div>
    </div>
  );
};

export default memo(Card);
