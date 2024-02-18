import logo from '../logo.png';

const Footer = () => {
  return (
    <footer className='relative z-10 bg-gray-300 pb-10 pt-20 bg-dark lg:pb-20 lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 sm:w-2/3 lg:w-3/12'>
            <div className='mb-10 w-full'>
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
              <p className='mb-7 text-base text-body-color text-dark-6'>
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p className='flex items-center text-sm font-medium text-dark text-black'>
                <span className='mr-3 text-primary'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* Include the SVG path content here */}
                  </svg>
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-dark text-white'>
                Resources
              </h4>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    SaaS Development
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    User Flow
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    User Strategy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-dark text-white'>
                Company
              </h4>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    About TailGrids
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Success History
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Setting & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-dark text-white'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Premium Support
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Know Our Team
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='inline-block text-base leading-loose text-body-color hover:text-primary text-dark-6'
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-3/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-dark text-white'>
                Follow Us On
              </h4>
              <div className='mb-6 flex items-center'>
                {/* Add social media links here */}
              </div>
              <p className='text-base text-body-color text-dark-6'>
                &copy; 2025 TailGrids
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Background SVGs */}
      <div>
        {/* Bottom left SVG */}
        <span className='absolute bottom-0 left-0 z-[-1]'>
          <svg
            width='217'
            height='229'
            viewBox='0 0 217 229'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/* Include the SVG path content here */}
          </svg>
        </span>
        {/* Top right SVG */}
        <span className='absolute right-10 top-10 z-[-1]'>
          <svg
            width='75'
            height='75'
            viewBox='0 0 75 75'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/* Include the SVG path content here */}
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
