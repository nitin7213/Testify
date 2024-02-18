import { useState } from 'react';
import logo from '../logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      x-data='{ navbarOpen: false }'
      className='flex w-full items-center bg-white'
    >
      <div className='container mx-auto'>
        <div className='relative -mx-4 flex items-center justify-between'>
          <div className='w-60 max-w-full px-4 flex items-center'>
            <a
              href='/'
              className='block w-auto mr-2 py-5'
            >
              <img
                src={logo}
                alt='Testify'
                className='h-auto max-h-10'
              />
            </a>
            <div className='text-black text-2xl custom-font'>Testify</div>
          </div>

          <div className='flex w-full items-center justify-between px-4'>
            <div>
              {/* Conditional rendering based on mobileMenuOpen state */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`h-8 w-12 absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <div
                  className={`h-${
                    mobileMenuOpen ? '0' : '2'
                  } w-6 flex items-center justify-between transition-transform ${
                    mobileMenuOpen ? 'rotate-45 h-0' : 'rotate-0'
                  }`}
                >
                  <span className='h-[2px] w-6 bg-black transform origin-right'></span>
                </div>
                <div
                  className={`h-${
                    mobileMenuOpen ? '0' : '2'
                  } w-6 flex items-center justify-between transition-transform ${
                    mobileMenuOpen ? '-rotate-45 h-0' : 'rotate-0'
                  }`}
                >
                  <span className='h-[2px] w-6 bg-black transform origin-right'></span>
                </div>
              </button>
              <nav
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow -2 ${
                  mobileMenuOpen ? '' : 'hidden'
                } lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent`}
              >
                <ul className='block lg:flex'>
                  <li>
                    <a
                      href='/'
                      className='flex py-4 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='flex py-4 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='flex py-4 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                    >
                      Practice
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='flex py-4 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                    >
                      Cart
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
              <a
                href='/'
                className='px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-black'
              >
                Log in
              </a>
              <a
                href='/'
                className='rounded-md bg-primary px-7 py-3 text-base font-medium text-black hover:bg-primary/90'
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
