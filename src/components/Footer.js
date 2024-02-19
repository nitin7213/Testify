import { IoMdSearch } from 'react-icons/io';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-zinc-400 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col sm:flex-row justify-between'>
          {/* Search Input */}
          <div className='mb-4 sm:mb-0 relative self-start'>
            <input
              type='text'
              className='py-2 px-4 bg-zinc-400 border-b border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:border-blue-300 pl-8'
              placeholder='Search...'
            />
            {/* Show the search icon inside the input */}
            <IoMdSearch className='absolute top-0 left-0 mt-3 ml-3 text-white' />
          </div>
          {/* Links */}
          <div className='flex flex-col mb-4 sm:mb-0'>
            <h1 className='text-white text-2xl mb-1 sm:mb-0'>Who We Are</h1>
            <div className='flex flex-col'>
              <a
                href='/'
                className='text-white'
              >
                About
              </a>
              <a
                href='/'
                className='text-white mt-2'
              >
                People
              </a>
              <a
                href='/'
                className='text-white mt-2'
              >
                Careers
              </a>
              <a
                href='/'
                className='text-white mt-2'
              >
                Events
              </a>
            </div>
          </div>
          <div className='flex flex-col mb-4 sm:mb-0'>
            <h2 className='text-white text-2xl  sm:mb-0 mb-1'>Latest Work</h2>
            <div className='flex flex-col'>
              <a
                href='/'
                className='text-white'
              >
                Research
              </a>
              <a
                href='/'
                className='text-white mt-2'
              >
                Infrastructure
              </a>
              <a
                href='/'
                className='text-white mt-2'
              >
                Blog
              </a>
              <a
                href='/'
                className='text-white mt-2'
              >
                Resources
              </a>
            </div>
          </div>
        </div>
        {/* Social Icons */}
        <div className='flex flex-col justify-center sm:justify-end mt-4 '>
          <h1 className='text-white mr-4 sm:mr-0 text-2xl mb-1'>Socials</h1>
          <div className='flex'>
            <FaFacebook className='mr-4 text-white text-3xl' />
            <FaGithub className='mr-4 text-white text-3xl' />
            <AiFillTwitterCircle className='mr-4 text-white text-3xl' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
