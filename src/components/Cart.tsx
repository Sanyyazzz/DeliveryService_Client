import React, {ReactChild, ReactElement, useEffect} from "react";
import {ProductsType, ProductsTypeInCart} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import ItemInCart from "./ItemInCart";
import {decrementItemInCart, incrementItemInCart} from "../store/reducers/cartSlice";

type CartInput = {
    isCartOpen: boolean
    totalPrice: number
    setTotalPrice: Function
}

const Cart = ({isCartOpen, setTotalPrice, totalPrice} : CartInput) => {
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
        productsInCart.forEach((p)=>{totalPrice+=p.price*p.count});
        setTotalPrice(totalPrice)
    })

    return(
        isCartOpen ?
        <div className="cart">
            <div>
                <h3>Ваше замовлення</h3>
                <ul>
                    {elementsInCart}
                </ul>
            </div>
            {
                productsInCart.length != 0 ?
            <div className="bottomCart">
                <div>Всього до сплати: <b>{totalPrice.toFixed(2)}</b></div>
                <button>Замовити</button>
            </div> : <div></div>
            }
        </div>
            :
        <div></div>
    )
}

export default Cart;