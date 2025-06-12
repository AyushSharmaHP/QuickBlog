import React, { useState } from 'react';
import { blogCategories,blog_data } from '../assets/assets';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard'; 


const BlogList = () => {
  const [menu, setMenu] = useState('ALL');

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item, index) => (
          <div key={index} className='relative'>
            {menu === item && (
              <div className='absolute inset-0 h-7 z-0 bg-primary rounded-full'></div>
            )}
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer relative z-10 text-gray-500 ${
                menu === item ? 'text-white px-4 pt-0.5' : ''
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {blog_data
          .filter((blog) => menu === 'ALL' || blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
