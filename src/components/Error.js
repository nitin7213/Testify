import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className='text-center min-h-80 '>
      <div className='flex-center align-middle'>
        <h1 className='text-3xl mt-5 p-2 mb-5 '>Path not Found !</h1>
        {err && (
          <h3>
            Error {err.status}: {err.statusText}
          </h3>
        )}{' '}
      </div>
    </div>
  );
};

export default Error;
