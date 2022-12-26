import React from "react";
import {NavLink} from "react-router-dom";

type HeaderInput = {
    isCartOpen: boolean
    setIsCartOpen: Function
    totalPrice: number
}

const Header = ({isCartOpen, setIsCartOpen, totalPrice} : HeaderInput) => {
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
                        <p>{totalPrice.toFixed(2)} ₴</p>
                        <button onClick={
                            isCartOpen ?
                                ()=>setIsCartOpen(false)
                                :
                                ()=>setIsCartOpen(true)
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
