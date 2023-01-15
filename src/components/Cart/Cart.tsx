import React, {ReactChild, ReactElement, useEffect} from "react";
import {ProductsType, ProductPointInCartType} from "../../types/productsType";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import ItemInCart from "./ItemInCart";
import {decrementItemInCart, deleteAllItem, hideCartTab, incrementItemInCart} from "../../store/reducers/cartSlice";
import {NavLink} from "react-router-dom";

const Cart = () => {
    const cartState = useAppSelector((store)=>store.cart)
    const dispatch = useAppDispatch();

    const incrementItem = (item:ProductPointInCartType) => {
        dispatch(incrementItemInCart(item))
    }

    const decrementItem = (item:ProductPointInCartType) => {
        dispatch(decrementItemInCart(item))
    }

    const elementsInCart : ReactElement[] | any = cartState.orderPoints.map((p)=>{
        return <ItemInCart key={p.id} productInCart={p} decrement={decrementItem} increment={incrementItem} />
    })

    useEffect(()=>{

    })

    return(
        <div className={`cart `+`${cartState.isOpenTabCart && "cartOpen"}`}>
            <div>
                <div className="topCart">
                    <h3>Ваше замовлення</h3>
                    <button onClick={()=>dispatch(deleteAllItem())}>Видалити</button>
                </div>
                <ul>
                    {elementsInCart}
                </ul>
            </div>
            {
                cartState.orderPoints.length != 0 ?
            <div className="bottomCart">
                <div>Всього до сплати: <b>{cartState.totalPrice.toFixed(2)}</b></div>
                <NavLink to="/confirmation">
                    <button onClick={()=>{dispatch(hideCartTab())}}>Замовити</button>
                </NavLink>
            </div> : <div></div>
            }
        </div>
    )
}

export default Cart;