import React, {useState} from 'react';
import './index.scss';
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Cart from "./components/Cart/Cart";
import {Route, Router, Routes} from "react-router-dom";
import PersonalAccount from "./pages/PersonalAccount";
import ConfirmationAnOrder from "./pages/ConfirmationAnOrder";
import WelcomePage from "./pages/WelcomePage";
import {useAppDispatch, useAppSelector} from "./store/hooks/hooks";
import {hideCartTab} from "./store/reducers/cartSlice";

function App() {

    const cartState = useAppSelector((store)=>store.cart)
    const dispatch = useAppDispatch();

  return (
    <div className="App">
        <Header />
        <div onClick={()=>dispatch(hideCartTab())}>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/maincontent" element={<MainContent />}/>
                <Route path="/account" element={<PersonalAccount />}/>
                <Route path="/confirmation" element={<ConfirmationAnOrder />}/>
            </Routes>
        </div>
        <Cart />
    </div>
  );
}

export default App;
