import React, {ReactElement} from "react";
import ProductCard from "./ProductCard";
import {ProductsType} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {addItemToCart} from "../store/reducers/cartSlice";

const MenuList = () => {

    const products : ProductsType[] = useAppSelector((store) => store.menuItems)
    const dispatch = useAppDispatch()

    const addItem = (item : ProductsType) => {
        //console.log(item)
        dispatch(addItemToCart({...item}))
    }

    const listOfProduct : ReactElement[] | any = products.map((p : ProductsType)=>
        <ProductCard key={p.id} product={p} addItemToCart={addItem} />
    )

    return(
        <div className="menuList">
            <h3>Всі пункти меню</h3>
            <h2>...</h2>
            <div className="menuItems">
                {listOfProduct}
            </div>
        </div>
    )
}

export default MenuList;