import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Lottie from 'lottie-react';
import errorAnimation from '../assets/Error.json';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:min-h-screen'>
      <div className='text-center mb-5'>
        <h1 className='text-3xl mt-5 p-2  custom-font text-blue-500'>
          Link Broken !
        </h1>
        <div className='w-full md:w-auto h-auto max-w-md mx-auto'>
          <Lottie
            animationData={errorAnimation}
            loop
            autoplay
            className='w-full h-auto'
          />
        </div>
        <Link
          to='/'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  inline-block'
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
