import {OrderStatus, UserType} from "../types/userType";
import {useEffect} from "react";
import {useAppDispatch} from "../store/hooks/hooks";
import {cancelOrderToApi} from "../store/actions/orderRequest";

type PropsType = {
    user: UserType
}

export const OrderHistory = ({user} : PropsType) => {

    const dispatch = useAppDispatch()

    const ordersHistory = user?.orderHistory.map((h)=>{
        let cancelButton =
            h.statusId == 3
            ? <button id="cancel" onClick={()=>onCancelOrder(h.id)}>Скасувати замовлення</button>
            : "";

        return(
            <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.fromAddress}</td>
                <td>{h.toAddress}</td>
                <td>{h.totalPrice} ₴</td>
                <td>{OrderStatus[h.statusId]}</td>
                <td width={30}>
                    {cancelButton}
                </td>
            </tr>
        )
    })

    const onCancelOrder = (id: number) => {
        dispatch(cancelOrderToApi(id))
    }

    useEffect(()=>{

    },[user])

    return(
        <table>
            <thead>
            <tr>
                <th>ID замовлення</th>
                <th>Звідки</th>
                <th>Куди</th>
                <th>Всього до сплати</th>
                <th>Статус</th>
                <th>...</th>
            </tr>
            </thead>
            <tbody>
            {ordersHistory}
            </tbody>
        </table>
    )
}