import React, {useState} from 'react';
import './index.scss';
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Cart from "./components/Cart";
import {Route, Router, Routes} from "react-router-dom";
import PersonalAccount from "./pages/PersonalAccount";
import ConfirmationAnOrder from "./pages/ConfirmationAnOrder";

function App() {
    const[totalPrice, setTotalPrice] = useState(0)
    const[isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="App">
        <Header totalPrice={totalPrice} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Routes>
            <Route path="/" element={<MainContent />}/>
            <Route path="/account" element={<PersonalAccount />}/>
            <Route path="/confirmation" element={<ConfirmationAnOrder />}/>
        </Routes>
        <Cart totalPrice={totalPrice} setTotalPrice={setTotalPrice} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </div>
  );
}

export default App;
