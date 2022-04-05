import "./App.css";
import Cart from "./components/cart/cart";
import Header from "./components/ui/header/header";
import Footer from "./components/ui/footer/footer";
import { Route,Routes } from 'react-router-dom';
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/sign-up/sign-up";
import Home from "./components/shop/home/home";
import Products from "./components/shop/products/products";


function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Routes>
      <Route path="/home" element={ <Home />} />
      <Route path="products" element={ <Products />} />
      <Route path="login" element={ <Login />} />
      <Route path="sign-up" element={ <SignUp />} />
      <Route path="*" element={ <Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
