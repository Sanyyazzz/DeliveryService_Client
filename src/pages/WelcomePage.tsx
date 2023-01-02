import React from "react";
import {NavLink} from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className="welcomePage">
            <h2>Отримай те що хочеш, не виходячи з дому</h2>
            <ul>
                <NavLink to={"/maincontent"}>
                    <li><img src={"/icon/free-icon-food-and-drink-5029077.png"} width={60} />Їжа</li>
                </NavLink>
                <li className="disabled"><img src={"/icon/free-icon-shopping-cart-3575648.png"} width={60} />Супермаркет</li>
                <li className="disabled"><img src={"/icon/free-icon-vegetable-5346571.png"} width={60} />Продукти</li>
            </ul>
        </div>
    )
}

export default WelcomePage;