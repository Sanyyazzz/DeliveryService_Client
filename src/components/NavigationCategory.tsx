import React, {useState} from "react";

const NavigationCategory = () => {
    const [category, setCategory] = useState<number>();

    return(
        <div className="navigation">
            <ul className="typeOfEat">
                <li key={0} onClick={()=>setCategory(0)}><img src={"/icon/free-icon-burger-1161695.png"} width={25} />Бургери</li>
                <li key={1} onClick={()=>setCategory(1)}><img src={"/icon/free-icon-pizza-4058619.png"} width={25} />Піца</li>
                <li key={2} onClick={()=>setCategory(2)}><img src={"/icon/free-icon-nigiri-4985784.png"} width={25} />Суши</li>
                <li key={3} onClick={()=>setCategory(3)}><img src={"/icon/free-icon-mojito-6304697.png"} width={25} />Напої</li>
            </ul>
        </div>
    )
}

export default NavigationCategory;