import React from 'react';

export default function Cover() {
  return (
    <div className='mt-20'>
      <div className='md:flex flex-rows justify-between gap-10'>
        <p>
          <span className='text-5xl font-bold inline-block'>3800+</span>{' '}
          <span className='text-blue-200 inline-block'>USER ACTIVE</span>
        </p>
        <p>
          <span className='text-5xl font-bold inline-block'>230+</span>{' '}
          <span className='text-blue-200 inline-block mb-50'>TRUSTED COMPANY</span>
        </p>
        <p>
          <span className='text-5xl font-bold inline-block'>$230M+</span>{' '}
          <span className='text-blue-200 inline-block mb-50'>TRANSACTION</span>
        </p>
      </div>
    </div>
  );
}
