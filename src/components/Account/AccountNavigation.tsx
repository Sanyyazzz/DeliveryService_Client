type PropsType = {
    setActiveTab: Function
}

export const AccountNavigation = ({setActiveTab}: PropsType) => {
    return(
        <ul className="accountNavigation">
            <li onClick={()=>setActiveTab("myOrders")}>Мої замовлення</li>
            <li onClick={()=>setActiveTab("contactInfo")}>Контактна інформація</li>
        </ul>
    )
}