import Image from 'next/image';
import React from 'react';

const Bio: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full px-2 py-8 mt-10 mb-10 text-gray-800 bg-gray-100 rounded-lg opacity-90 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center justify-center w-full font-bold">
        <span>Thank you for reading!</span>
      </div>
      <div className="mt-4 mb-4">
        <Image
          alt={'bio picture of author'}
          src={'/static/images/logo.png'}
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span>
          Written by <b>Jeff Yang</b>
        </span>
        <span className="text-sm">
          I blog about software development, ideas, and my daily journey as a learner & software
          engineer.
        </span>
      </div>
    </div>
  );
};

export default Bio;
