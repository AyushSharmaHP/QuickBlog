import React from 'react';
import { assets, footer_data } from '../assets/assets';

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        {/* Left: Logo and Description */}
        <div>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
          <p className='max-w-[410px] mt-6'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Right: Footer Sections */}
        <div className='flex flex-wrap gap-10 md:gap-16'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>
                {section.title}
              </h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        © 2025 QuickBlog Ayush Sharma — All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
