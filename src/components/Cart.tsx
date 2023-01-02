import React, {ReactChild, ReactElement, useEffect} from "react";
import {ProductsType, ProductsTypeInCart} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import ItemInCart from "./ItemInCart";
import {decrementItemInCart, deleteAllItem, incrementItemInCart} from "../store/reducers/cartSlice";
import {NavLink} from "react-router-dom";

type CartInput = {
    isCartOpen: boolean
    setIsCartOpen: Function
    totalPrice: number
    setTotalPrice: Function
}

const Cart = ({isCartOpen, setIsCartOpen, setTotalPrice, totalPrice} : CartInput) => {
    const productsInCart : ProductsTypeInCart[] = useAppSelector((store) => store.cartItems);
    const dispatch = useAppDispatch();

    const incrementItem = (item:ProductsTypeInCart) => {
        dispatch(incrementItemInCart(item))
    }

    const decrementItem = (item:ProductsTypeInCart) => {
        dispatch(decrementItemInCart(item))
    }

    const elementsInCart : ReactElement[] | any = productsInCart.map((p)=>{
        return <ItemInCart key={p.id} productInCart={p} decrement={decrementItem} increment={incrementItem} />
    })

    useEffect(()=>{
        let totalPrice = 0
        productsInCart.forEach((p)=>{totalPrice+=p.product.price*p.count});
        setTotalPrice(totalPrice)
    })

    return(
        <div className={`cart `+`${isCartOpen && "cartOpen"}`}>
            <div>
                <div className="topCart">
                    <h3>Ваше замовлення</h3>
                    <button onClick={()=>dispatch(deleteAllItem())}>DeleteAll</button>
                </div>
                <ul>
                    {elementsInCart}
                </ul>
            </div>
            {
                productsInCart.length != 0 ?
            <div className="bottomCart">
                <div>Всього до сплати: <b>{totalPrice.toFixed(2)}</b></div>
                <NavLink to="/confirmation">
                    <button onClick={()=>setIsCartOpen(false)}>Замовити</button>
                </NavLink>
            </div> : <div></div>
            }
        </div>
    )
}

export default Cart;