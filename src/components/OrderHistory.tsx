import {OrderStatus, UserType} from "../types/userType";
import {useEffect} from "react";

type PropsType = {
    user: UserType
}

export const OrderHistory = ({user} : PropsType) => {

    const ordersHistory = user.orderHistory.map((h)=>{
        let cancelButton = h.statusId == 3
            ? <button id="cancel">Скасувати замовлення</button>
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