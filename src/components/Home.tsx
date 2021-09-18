import React, { memo } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import decor from '../images/photo1.png';
import Card from './Card';

const Home = () => {
  return (
    <div className='mt-48 flex flex-col xl:flex-row items-center justify-between'>
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
          className='mt-10 block text-lg font-bold'
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
        <Card className='xs:fixed bottom-28 xs:bottom-56 sm:bottom-40 md:bottom-32 right-14 md:right-24 lg:right-52 xl:right-16 xl:top-120' />
      </div>
    </div>
  );
};

export default memo(Home);
