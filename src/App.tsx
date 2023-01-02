import React, {useState} from 'react';
import './index.scss';
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Cart from "./components/Cart";
import {Route, Router, Routes} from "react-router-dom";
import PersonalAccount from "./pages/PersonalAccount";
import ConfirmationAnOrder from "./pages/ConfirmationAnOrder";
import WelcomePage from "./pages/WelcomePage";
import {useAppSelector} from "./store/hooks/hooks";

function App() {

    const cartState = useAppSelector((store)=>store.cart)

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route path="/maincontent" element={<MainContent />}/>
            <Route path="/account" element={<PersonalAccount />}/>
            <Route path="/confirmation" element={<ConfirmationAnOrder />}/>
        </Routes>
        <Cart />
    </div>
  );
}

export default App;
