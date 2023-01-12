import React, {ReactElement} from "react";
import {ProductsType} from "../../types/productsType";
import ProductCard from "./ProductCard";

type PropsType = {
    products: ProductsType[],
    onAddItemToCart: Function
}

export const ProductsCard = ({products, onAddItemToCart} : PropsType) => {

    const listOfProduct : ReactElement[] | any = products.map((p : ProductsType)=>
        <ProductCard key={p.id} product={p} addItemToCart={onAddItemToCart} />
    )

    return(
        <>
            {
                listOfProduct.length != 0
                    ? listOfProduct
                    : <div>Немає пунктів цієї категорії</div>
            }
        </>
    )
}