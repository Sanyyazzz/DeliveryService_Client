import React from "react";
import {ProductsType} from "../types/productsType";

type PropsType = {
    product: ProductsType
    addItemToCart: Function
}

const ProductCard = (props : PropsType) => {

    return(
        <div className="card">
            <div className="topPart">
                <img src={props.product.imageURL} width={140} />
            </div>
            <div className="bottomPart">
                <p>{props.product.productTitle} ({props.product.productWeight}г)</p>
                <div className="price">
                    <b>{props.product.price} ₴</b>
                    <button onClick={()=>props.addItemToCart(props.product)}>
                        <img src={"/icon/free-icon-font-plus-3917757.png"} width={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;