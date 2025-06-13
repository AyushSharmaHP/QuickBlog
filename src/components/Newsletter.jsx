import React from 'react';

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-4 my-32 px-4'>
      <h1 className='text-2xl md:text-4xl font-semibold'>Never Miss a Blog</h1>
      <p className='text-gray-600'>
        Subscribe to get the latest blogs, new tech, and exclusive news.
      </p>
      <form
        className='flex w-full max-w-2xl h-12 md:h-13'
        onSubmit={(e) => e.preventDefault()} // Optional: prevent default for now
      >
        <input
          type='email'
          className='w-full h-full border border-gray-300 rounded-l-md px-3 text-gray-500 outline-none'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='px-8 md:px-12 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-r-md'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
