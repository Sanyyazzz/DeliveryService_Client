import React from "react";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {showHideCartTab} from "../store/reducers/cartSlice";

const Header = () => {

        const cart = useAppSelector((store)=>store.cart)
        const dispatch = useAppDispatch();

        return(
            <header>
                <div className="wrapper">
                    <div className="leftSide">
                        <NavLink to={"/"}>
                            <img src={"/icon/free-icon-pizza-deliver-8161162.png"} alt='logo' width={60} />
                        </NavLink>
                        <h3>Delivery Service</h3>
                    </div>
                    <div className="rightSide">
                        <p>{cart.totalPrice.toFixed(2)} ₴</p>
                        <button onClick={()=>
                            dispatch(showHideCartTab())
                        }>
                            <img src={"/icon/free-icon-cart-7528413.png"} alt='cart' width={30} height={30} />
                        </button>
                        <button>
                            <NavLink to={ "/account"}>
                                <img src={"/icon/user.png"} alt='cart' width={30} height={30} />
                            </NavLink>
                        </button>
                    </div>
                </div>
            </header>
        )
}

export default Header;
