import React, { memo } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import decor from '../images/photo1.png';
import Card from './Card';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-between mt-24 xs:mt-216 lg:flex-row'>
      <div className='self-start xl:self-center lg:w-2/5'>
        <h1 className='text-5xl font-medium tracking-wide'>
          Modern interior
        </h1>
        <p className='mt-10 text-2xl xl:w-100'>
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
      <div className='relative mt-14 lg:w-3/5 lg:mt-0 '>
        <img
          className='rounded'
          src={decor}
          alt='Decor'
        />
        <Card className='-bottom-9 right-12 lg:-bottom-14 xs:absolute lg:right-10' />
      </div>
    </div>
  );
};

export default memo(Home);
