import {OrderStatus, UserType} from "../../types/userType";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {Loader} from "../Loader";
import {OrderHistory} from "../OrderHistory";
import {useEffect, useState} from "react";

const AccountOrdersList = () => {
    const isLoading = useAppSelector((store)=>store.loading).isLoading;
    const user : UserType = useAppSelector((store) => store.user);

    return(
        <div className="accountContent orderList" >
            {isLoading
                ? <Loader/>
                : <OrderHistory user={user}/>
            }
        </div>
    )
}

export default AccountOrdersList;