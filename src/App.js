//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CopyrightBar from './components/CopyrightBar';
//Routers
import { createBrowserRouter, Outlet } from 'react-router-dom';
//Pages
import LoginForm from './pages/Login';
import SignupForm from './pages/Signup';
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
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
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/signup',
        element: <SignupForm />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      { path: '/practice', element: <Practice /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
