
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Product from './components/product/product';
import Sale from './components/sale/sale';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/productos' element={<Product/>}/>
      <Route path='/ventas' element={<Sale/>}/>
    </Routes>
    </>
  )
}

export default App;
