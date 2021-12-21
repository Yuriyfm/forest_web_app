import React from "react";
import s from './LeftSidebar.module.css'
import DelyanasData from "./DelyanasData/DelyanasData";

const LeftSidebar = () => {
    return (
        <div className={s.nav}>
            <div>
                <DelyanasData />
            </div>
        </div>
    )
}


export default LeftSidebar;