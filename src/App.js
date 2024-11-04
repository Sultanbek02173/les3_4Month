import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';

function App() {
  return (
    <Router>
      <header>
        <p><Link to={'/'}>Home page</Link></p>
        <p><Link to={'/category'}>Category page</Link></p>
        <p><Link to={'/cart'}>Cart page</Link></p>
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
