import {ProductPointInCartType} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {decrementItemInCart, deleteAllItem, incrementItemInCart} from "../store/reducers/cartSlice";
import React, {ReactElement, useEffect, useState} from "react";
import ItemInCart from "../components/ItemInCart";
import {NavLink, redirect} from "react-router-dom";
import ItemInConfirmOrder from "../components/ItemInConfirmOrder";
import {AddressType, UserType} from "../types/userType";
import {confirmOrder} from "../store/reducers/userSlice";

const ConfirmationAnOrder = () => {

    const user : UserType = useAppSelector((store)=>store.user)
    const cart = useAppSelector((store) => store.cart);
    const dispatch = useAppDispatch();

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
        dispatch(confirmOrder())
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
                        <input type="text" defaultValue={address} />
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
                <NavLink to="/maincontent">
                    <button id="confirmOrder" onClick={()=>onConfirmOrder()}>
                        Підтвердити замовлення
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default ConfirmationAnOrder