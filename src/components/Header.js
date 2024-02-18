import logo from '../logo.png';

const Header = () => {
  const logo_img = (
    <img
      src={logo}
      alt='T'
    ></img>
  );
  return (
    <div className='header'>
      <div className='logo'>
        <div className='logo-img'> {logo_img}</div>{' '}
        <h1 className='logo-name'>TESTIFY</h1>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Practice</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
