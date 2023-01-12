import React, {useEffect, useState} from "react";
import {getProductByCategory} from "../../store/actions/productRequest";
import {useAppDispatch} from "../../store/hooks/hooks";

type PropsType = {
    setSelectedCategory: Function
}

const NavigationCategory = ({setSelectedCategory} : PropsType) => {
    return(
        <div className="navigation">
            <ul className="typeOfEat">
                <li key={0} onClick={()=>setSelectedCategory(1)}><img src={"/icon/free-icon-burger-1161695.png"} width={25} />Бургери</li>
                <li key={1} onClick={()=>setSelectedCategory(2)}><img src={"/icon/free-icon-pizza-4058619.png"} width={25} />Піца</li>
                <li key={2} onClick={()=>setSelectedCategory(3)}><img src={"/icon/free-icon-nigiri-4985784.png"} width={25} />Суши</li>
                <li key={3} onClick={()=>setSelectedCategory(4)}><img src={"/icon/free-icon-mojito-6304697.png"} width={25} />Напої</li>
            </ul>
        </div>
    )
}

export default NavigationCategory;