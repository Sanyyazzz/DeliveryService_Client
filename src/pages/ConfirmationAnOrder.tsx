import {ProductsTypeInCart} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {decrementItemInCart, deleteAllItem, incrementItemInCart} from "../store/reducers/cartSlice";
import React, {ReactElement, useEffect, useState} from "react";
import ItemInCart from "../components/ItemInCart";
import {NavLink} from "react-router-dom";
import ItemInConfirmOrder from "../components/ItemInConfirmOrder";
import {AddressType, UserType} from "../types/userType";

const ConfirmationAnOrder = () => {

    const user : UserType = useAppSelector((store)=>store.user)
    const productsInCart : ProductsTypeInCart[] = useAppSelector((store) => store.cartItems);
    const dispatch = useAppDispatch();

    const [address, setAddress] = useState("");

    const elementsInCart : ReactElement[] | any = productsInCart.map((p)=>{
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

    useEffect(()=>{

    })

    return(
        <div className="confirmationOrder">
            <div className="contentConf">
                <h2>Ваше замовлення</h2>
                <ul className="list">
                    {elementsInCart}
                </ul>
                Всього до сплати: <b></b>
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
                <button id="confirmOrder">Підтвердити замовлення</button>
            </div>
        </div>
    )
}

export default ConfirmationAnOrder