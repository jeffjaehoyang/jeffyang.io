import Image from 'next/image';
import React from 'react';

const Bio: React.FC = () => {
  return (
    <div className="mt-10 mb-10 flex w-full flex-col items-center justify-between rounded-lg bg-primary-100 px-2 py-8 text-gray-800 opacity-90">
      <div className="flex w-full items-center justify-center font-bold">
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
      <div className="flex w-full flex-col items-center justify-center text-center">
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
