import React, {ReactElement, useEffect} from "react";
import {ProductsType} from "../../types/productsType";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {addItemToCart} from "../../store/reducers/cartSlice";
import {Loader} from "../Loader";
import {ProductsCard} from "./ProductsCard";

const MenuList = () => {
    const isLoading = useAppSelector((store)=>store.loading).isLoading;
    const products : ProductsType[] = useAppSelector((store) => store.menuItems)
    const dispatch = useAppDispatch()

    const onAddItemToCart = (item : ProductsType) => {
        dispatch(addItemToCart({...item}))
    }

    return(
        <div className="menuList">
            <h3>Всі пункти меню</h3>
            <h2>...</h2>
            {isLoading
                ? <Loader/>
                : <>
                    <div className="menuItems">
                        <ProductsCard products={products} onAddItemToCart={onAddItemToCart} />
                    </div>
                </>
            }
        </div>
    )
}

export default MenuList;