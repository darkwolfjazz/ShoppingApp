import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Shop from './Pages/cart/shop/Shop';
import Cart from './Pages/cart/Cart';
import ShopcontextProvider from './Context/Shop-context';

function App() {
  return (
    <div className="App">
     <ShopcontextProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
     </ShopcontextProvider>
    </div>
  );
}

export default App;
