import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Cart from './Component/Cart/Cart';
import Contact from './Component/Contact/Contact';
import NavBar from './Component/NavBar/NavBar';
import NotFound from './Component/NotFound/NotFound';
import Products from './Component/Products/Products';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <br />
      <Routes>
        <Route path='/' element={<Products></Products>}> </Route>
        <Route path='/home' element={<Products></Products>}> </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
