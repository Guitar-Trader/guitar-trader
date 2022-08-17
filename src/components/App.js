import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import ProductPage from './ProductPage';

function App() {
  const clickedProduct = 1
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path={'/product/' + clickedProduct} element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
