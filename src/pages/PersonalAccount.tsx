import {useState} from "react";
import AccountPageContent from "../components/AccountPageContent";

const PersonalAccount = () => {

    const [activeTab, setActiveTab] = useState("myOrders");

    return(
        <div className="account">
            <ul className="accountNavigation">
                <li onClick={()=>setActiveTab("myOrders")}>Мої замовлення</li>
                <li onClick={()=>setActiveTab("contactInfo")}>Контактна інформація</li>
            </ul>
            <AccountPageContent activeTab={activeTab} />
        </div>
    )
}

export default PersonalAccount;