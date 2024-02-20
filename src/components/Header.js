import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const crossRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        crossRef.current &&
        !crossRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='sticky top-0 bg-white bg-opacity-80 z-50'>
      <div className='container mx-auto'>
        <div className='relative flex items-center justify-between'>
          <div className='flex items-center'>
            <a
              href='/'
              className='block w-auto mr-2 py-3' // Adjusted padding here
            >
              <img
                src={logo}
                alt='Testify'
                className='h-auto max-h-10'
              />
            </a>
            <div className='text-blue-500 text-2xl custom-font'>Testify</div>
          </div>

          <div className='flex items-center justify-center'>
            {/* Conditional rendering based on mobileMenuOpen state */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              ref={crossRef} // Assign ref to the cross button
              className={`h-8 w-12 absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[3px] ring-primary focus:ring-2 lg:hidden`}
            >
              <div
                className={`h-2 w-6 flex items-center justify-between transition-transform ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1' : 'rotate-0'
                }`}
              >
                <span className='h-[2px] w-6 bg-black transform origin-right'></span>
              </div>
              <div
                className={`h-2 w-6 flex items-center justify-between transition-transform ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'rotate-0'
                }`}
              >
                <span className='h-[2px] w-6 bg-black transform origin-right'></span>
              </div>
            </button>
            <nav
              ref={menuRef}
              className={`absolute right-4 ali top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-2 shadow -2 ${
                mobileMenuOpen ? '' : 'hidden'
              } lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className='block lg:flex'>
                <li>
                  <a
                    href='/'
                    className='flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                  >
                    Practice
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex'
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex justify-end'>
            <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
              <a
                href='/'
                className='px-7 py-2 text-base font-medium text-dark hover:text-primary dark:text-black'
              >
                Log in
              </a>
              <a
                href='/'
                className='rounded-md bg-primary px-7 py-2 text-base font-medium text-black hover:bg-primary/90'
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
