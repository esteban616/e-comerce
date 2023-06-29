import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import ProductIdPage from "./pages/ProductIdPage";
import { Login } from "./pages/Login";
import Header from "./components/shared/Header";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { getCartThunk } from "./store/slices/cart.slice";
import Purchases from "./pages/Purchases";
import Protectetroutes from "./pages/Protectetroutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
    dispatch(getCartThunk())
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>

       <Route element={<Protectetroutes/>}>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/purchases" element={<Purchases />}/>
       </Route> 
      </Routes>
    </div>
  );
}

export default App;
