import React from "react";
import {ProductPointInCartType} from "../types/productsType";
import {useAppDispatch} from "../store/hooks/hooks";
import {decrementItemInCart, deleteItem, incrementItemInCart} from "../store/reducers/cartSlice";

type PropsType = {
    productInCart : ProductPointInCartType
}

const ItemInConfirmOrder= (props : PropsType) => {

    const dispatch = useAppDispatch();

    return(
        <li key={props.productInCart.product.id}>
            <div className="left">
                <img src={props.productInCart.product.image} width="100px"/>
                <p>{props.productInCart.product.productName} ({props.productInCart.product.weight}г)</p>
                <b className="count">{props.productInCart.count}x</b>
            </div>
            <div className="right">
                Ціна:<b className="price">{(props.productInCart.product.price * props.productInCart.count).toFixed(2)} ₴</b>
                <button onClick={()=>dispatch(decrementItemInCart(props.productInCart))}><img src={"/icon/free-icon-font-minus-small-4338830.png"} width={15} /></button>
                <button onClick={()=>dispatch(incrementItemInCart(props.productInCart))}><img src={"/icon/free-icon-font-plus-3917757.png"} width={15} /></button>
                <button className="deleteButton"
                        onClick={()=>dispatch(deleteItem(props.productInCart))}
                >
                    <img src={"/icon/delete.png"} width={20} />
                </button>
            </div>
        </li>
    )
}

export default ItemInConfirmOrder;
