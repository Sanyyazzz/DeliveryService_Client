import {OrderStatus, UserType} from "../types/userType";
import {useAppSelector} from "../store/hooks/hooks";

const AccountOrdersList = () => {

    const userInfo : UserType = useAppSelector((store) => store.user);

    const ordersHistory = userInfo.orderHistory.map((h)=>{
        return(
            <li key={h.id}>{h.id} {h.totalPrice} <b>{OrderStatus[h.status]}</b></li>
        )
    })

    return(
        <div className="accountContent" >
            <ul>
                {ordersHistory}
            </ul>
        </div>
    )
}

export default AccountOrdersList;