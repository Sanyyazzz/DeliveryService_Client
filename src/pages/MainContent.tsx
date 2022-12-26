import React, {useState} from "react";
import NavigationCategory from "../components/NavigationCategory";
import MenuList from "../components/MenuList";

const MainContent = () => {
    return(
        <div className="content">
            <NavigationCategory />
            <MenuList />
        </div>
    )
}

export default MainContent;