import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import './app.css'
import { Header } from './components';

function App() {
  return (
    <Router>
      
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
