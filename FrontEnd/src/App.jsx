
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Product from './components/product/product';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/productos' element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App;
