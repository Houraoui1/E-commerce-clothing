import { Routes, Route } from "react-router-dom";

import Home from "./components/Router/Home/Home";
import Navbar from "./components/Router/Navbar/Navbar";
import Authentification from './components/Router/authentification/Authentifiction'
import Shop from "./components/Router/shop/shop";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/Router/chekout/Checkout";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentification" element={<Authentification />} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  );
};

export default App;
