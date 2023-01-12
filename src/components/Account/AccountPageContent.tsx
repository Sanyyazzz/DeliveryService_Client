import {ReactElement, useEffect} from "react";
import AccountOrdersList from "./AccountOrdersList";
import AccountContactInfo from "./AccountContactInfo";
import {useAppDispatch} from "../../store/hooks/hooks";
import {getUser} from "../../store/actions/userRequests";
import {endLoading, startLoading} from "../../store/reducers/loading";

type PropsAccountPage = {
    activeTab: string;
}

const AccountPageContent = ({activeTab}:PropsAccountPage) => {

    let activeTabContent : ReactElement = <div></div>;

    switch(activeTab){
        case "myOrders" :
            return activeTabContent = <AccountOrdersList />;

        case "contactInfo":
            return activeTabContent = <AccountContactInfo />

        default: activeTabContent=<AccountOrdersList />;
    }

    return(
        <div>
            {activeTabContent}
        </div>
    )
}

export default AccountPageContent;