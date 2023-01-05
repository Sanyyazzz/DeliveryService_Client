import React, {ChangeEventHandler, useState} from "react";
import {ProductPointInCartType} from "../types/productsType";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {AddressType, UserType} from "../types/userType";
import {addAddressUser, deleteAddressUser, saveUser} from "../store/reducers/userSlice";

const AccountContactInfo = () => {
    const userInfo : UserType = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();

    const [isChagedInfo, setIsChangeInfo] = useState(false);

    const [name, setName] = useState(userInfo.name);
    const [phoneNum, setPhoneNum] = useState(userInfo.phoneNumber);
    const [newAddress, setNewAddress] = useState("");
    //const [address, setAddress] = useState<string[]>(userInfo.address);

    const onChangeName = (e : React.FormEvent<HTMLInputElement>) => {setIsChangeInfo(true); setName(e.currentTarget.value);}
    const onChangePhone = (e : React.FormEvent<HTMLInputElement>) => {setIsChangeInfo(true); setPhoneNum(e.currentTarget.value);}

    const deleteAddress = (a : AddressType) => {
        dispatch(deleteAddressUser(a))
    }

    const onChangeAddress = () => {
        if(newAddress){
            setIsChangeInfo(true);
            dispatch((addAddressUser(newAddress)))
            setNewAddress("")
        }
    }

    const onSaveEdit = () => {
        dispatch(saveUser({
            id:userInfo.id,
            name: name,
            phoneNumber: phoneNum,
            address: userInfo.address,
            orderHistory: userInfo.orderHistory
        }))
    }

    const arrayOfAddress = userInfo.address.map((a)=>{
        return(
            <li className="address" key={a.id}>
                {a.address}
                <button onClick={()=>deleteAddress(a)}>
                    <img src={"/icon/free-icon-font-minus-small-4338830.png"} width={10} />
                </button>
            </li>
        )
    });

    return(
        <div className="accountContent contactInfo" >
            <label>
                Ім'я:<br/>
                <input type="text" id="name" value={name} onChange={onChangeName} />
            </label><br/>
            <label>
                Контактний телефон:<br/>
                <input type="tel" id="phoneNumber" value={phoneNum} onChange={onChangePhone} />
            </label><br/>
            <label>
                Адреса:<br/>
                <input type="text" id="address" value={newAddress} onChange={(e)=>setNewAddress(e.currentTarget.value)} />
                <button style={{marginLeft:"10px"}} onClick={onChangeAddress}>
                    <img src={"/icon/free-icon-font-plus-3917757.png"} width={10} />
                </button><br/>
                <ul>
                    {arrayOfAddress}
                </ul>
            </label><br/>
            <button onClick={onSaveEdit}>Зберегти</button>
        </div>
    )
}

export default AccountContactInfo;