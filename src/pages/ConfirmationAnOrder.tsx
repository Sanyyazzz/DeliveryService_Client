import {ProductPointInCartType} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {decrementItemInCart, deleteAllItem, incrementItemInCart} from "../store/reducers/cartSlice";
import React, {ReactElement, useEffect, useState} from "react";
import ItemInCart from "../components/Cart/ItemInCart";
import {NavLink, redirect, Route, useNavigate} from "react-router-dom";
import ItemInConfirmOrder from "../components/ItemInConfirmOrder";
import {AddressType, UserType} from "../types/userType";
import {createOrder} from "../store/actions/orderTypeBrige";
import MainContent from "./MainContent";
import {getUser} from "../store/actions/userRequests";

const ConfirmationAnOrder = () => {
    const user : UserType = useAppSelector((store)=>store.user)
    const cart = useAppSelector((store) => store.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState("");

    const elementsInCart : ReactElement[] | any = cart.orderPoints.map((p)=>{
        return <ItemInConfirmOrder key={p.id} productInCart={p}/>
    })

    const addressInProfile = user.address.map((a)=>{
        return(
            <li key={a.id}>
                {a.address}
                <button onClick={()=>setAddress(a.address)}>Обрати</button>
            </li>
        )
    })

    const onConfirmOrder = () => {
        if(address == ""){return alert("Адреса не можу бути порожньою")}
        else if(cart.orderPoints.length == 0){return alert("Ваша корзина порожня")}
        else{
            dispatch(createOrder(user.id, cart, address))
            navigate("/maincontent");
        }
    }

    return(
        <div className="confirmationOrder">
            <div className="contentConf">
                <NavLink to={"/maincontent"}>
                    <div className="return">
                        <img src={"/icon/free-icon-left-arrow-137518.png"} width={20} />
                        До покупок
                    </div>
                </NavLink>
                <h2>Ваше замовлення</h2>
                <ul className="list">
                    {elementsInCart}
                </ul>
                <div id="price">Всього до сплати: <b>{cart.totalPrice} грн.</b></div>
                <h2>Оберіть адресу</h2>
                <div className="chooseAddress">
                    <div className="inputAddress">
                        <input
                            required
                            className=""
                            type="text"
                            defaultValue={address}
                            onChange={(address)=>setAddress(address.target.value)}
                        />
                        <button><img src={"/icon/geo.png"} width={30} /></button>
                    </div>
                    <div className="readyAddress">
                        <ul>
                            {addressInProfile}
                        </ul>
                    </div>
                </div>
                <h2>Контактна інформація</h2>
                <div className="contactInfo">
                    <p>Ім'я: {user.name}</p>
                    <p>Номер телефона: {user.phoneNumber}</p>
                </div>
                <button id="confirmOrder" onClick={onConfirmOrder}>
                    Підтвердити замовлення
                </button>
            </div>
        </div>
    )
}

export default ConfirmationAnOrder