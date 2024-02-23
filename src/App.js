import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CopyrightBar from './components/CopyrightBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/Login'
            element={Login}
          />
          <Route
            path='/Signup'
            element={Signup}
          />
        </Routes>
      </BrowserRouter>

      <Hero />
      <Footer />
      <CopyrightBar />
    </div>
  );
};

export default App;
