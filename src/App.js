import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import './app.css'
import cart from './img/Frame.svg';
import user from './img/Frame(1).svg';
import arrow from './img/Frame(2).svg'
import searchIcon from './img/Vector.svg'
import { useEffect, useRef, useState } from 'react';

function App() {

  const [showPageLinks, setShowPageLinks] = useState(false);

  const shopLinksRef = useRef(null);
  
  const togglePageLinks = () => {
    setShowPageLinks(!showPageLinks);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopLinksRef.current && !shopLinksRef.current.contains(event.target)) {
        setShowPageLinks(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <header className='header'>
        <div>
          <Link to={'/'}><h2>SHOP.CO</h2></Link>
        </div>
        <div className='links'>
          <div className='shopLinks' onClick={togglePageLinks} ref={shopLinksRef}><p>Shop</p><img src={arrow} alt="" /></div>
          <div className={`pageLinks ${showPageLinks ? 'visible' : ''}`}>
            <p><Link to={'/'}>Home page</Link></p>
            <p><Link to={'/category'}>Category page</Link></p>
            <p><Link to={'/cart'}>Cart page</Link></p>
          </div>
          
          <p><a href="#on-sale">On Sale</a></p>
          <p><a href="#on-newArrivals">New Arrivals</a></p>
          <p><a href="#on-brands">Brands</a></p>
        </div>
        <div className='inputSearch'>
          <img src={searchIcon} alt="" />
          <input type="text" placeholder='Search for products...'/>
        </div>
        <div className='icons'>
          <img src={cart} alt="" />
          <img src={user} alt="" />
        </div>
        
      </header>

      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail' element={<Detail />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
