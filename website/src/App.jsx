import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from './components/layout';
// import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import Demo from './pages/Demo/Demo';
import Purchase from './pages/Purchase/Purchase';
import Cart from './pages/Cart/Cart';
// import Blogs from './pages/Blogs/Blogs';
import NotFound from "./pages/NotFound/NotFound";
import { CartProvider } from "./context/CartContext";
 
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          {/* <Route path="about" element={<About/>} /> */}
          {/* <Route path="blogs" element={<Blogs/>} /> */}
          <Route path="purchase" element={<Purchase />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="demo" element={<Demo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
