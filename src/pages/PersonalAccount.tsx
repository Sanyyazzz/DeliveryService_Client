import {useEffect, useState} from "react";
import AccountPageContent from "../components/Account/AccountPageContent";
import {useAppDispatch} from "../store/hooks/hooks";
import {getUser} from "../store/actions/userRequests";
import {endLoading, startLoading} from "../store/reducers/loading";
import {AccountNavigation} from "../components/Account/AccountNavigation";

const PersonalAccount = () => {

    const [activeTab, setActiveTab] = useState("myOrders");
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getUser(1)) //TODO: static userId
    }, [])

    return(
        <div className="account">
            <AccountNavigation setActiveTab={setActiveTab} />
            <AccountPageContent activeTab={activeTab} />
        </div>
    )
}

export default PersonalAccount;