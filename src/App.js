import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CopyrightBar from './components/CopyrightBar';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import Cart from './pages/Cart';
import Error from './components/Error';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <CopyrightBar />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      { path: '/practice', element: <Practice /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '*',
        element: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
