import React from "react";
import {ProductsTypeInCart} from "../types/productsType";

type PropsType = {
    productInCart : ProductsTypeInCart,
    increment: Function,
    decrement: Function,
}

const ItemInCart = (props : PropsType) => {

    return(
        <li key={props.productInCart.id}>
            <div className="info">
                <b>{props.productInCart.count}x</b>
                {props.productInCart.productTitle} ({props.productInCart.productWeight}г)
                <b>{(props.productInCart.price * props.productInCart.count).toFixed(2)} ₴</b>
            </div>
            <div className="buttons">
                <button onClick={()=>props.decrement(props.productInCart)}><img src={"/icon/free-icon-font-minus-small-4338830.png"} width={10} /></button>
                <button onClick={()=>props.increment(props.productInCart)}><img src={"/icon/free-icon-font-plus-3917757.png"} width={10} /></button>
            </div>
        </li>
    )
}

export default ItemInCart;