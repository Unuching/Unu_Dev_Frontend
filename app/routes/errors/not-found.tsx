import { div } from 'framer-motion/client';
import { Link } from 'react-router';
const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center tect-center px-6 min-h-[70vh] '>
      <h1 className='text-6xl font-extrabold text-blue-400 mb-2'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-100 mb-2'>
        Page Not Found
      </h2>
      <p className='text-gray-400'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to='/'
        className='inline-block bg-blue-600 text-white px-6 py-2 mt-3 rounded hover:bg-blue-800 transition'
      >
        Go To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
