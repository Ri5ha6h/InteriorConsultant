import React, { memo } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import decor from '../images/photo1.png';
import Card from './Card';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-between mt-24 xs:mt-48 xl:flex-row'>
      <div className=''>
        <h1 className='text-5xl font-medium tracking-wide'>
          Modern interior
        </h1>
        <p className='mt-10 text-2xl '>
          A full-Service residential & commercial
          interior design and staging company
          offering professional organizing &
          eco-services.
        </p>
        <a
          href='#'
          className='block mt-10 text-lg font-bold'
        >
          Read more{' '}
          <BsArrowRight className='inline-block w-6 h-6 ml-2' />
        </a>
      </div>
      <div className='relative mt-20 xl:mt-0'>
        <img
          className='rounded md:w-150 md:h-110'
          src={decor}
          alt='Decor'
        />
        <Card className=' xs:absolute right-16 top-60 sm:top-80 md:top-96' />
      </div>
    </div>
  );
};

export default memo(Home);
