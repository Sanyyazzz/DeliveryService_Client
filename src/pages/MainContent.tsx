import React, {useEffect, useState} from "react";
import NavigationCategory from "../components/Menu/NavigationCategory";
import MenuList from "../components/Menu/MenuList";
import {useAppDispatch} from "../store/hooks/hooks";
import {getProductByCategory} from "../store/actions/productRequest";
import {getUser} from "../store/actions/userRequests";

const MainContent = () => {

    const [selectedCategory, setSelectedCategory] = useState(1);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getProductByCategory(selectedCategory))
        dispatch(getUser(1)) //static userId
    }, [selectedCategory])

    return(
        <div className="content">
            <NavigationCategory setSelectedCategory={setSelectedCategory}/>
            <MenuList />
        </div>
    )
}

export default MainContent;