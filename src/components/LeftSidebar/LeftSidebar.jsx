import React from "react";
import s from './LeftSidebar.module.css'
import DataTree from "./DataTree/DataTree";

const LeftSidebar = () => {
    return (
        <div className={s.nav}>
            <div>
                <DataTree />
            </div>
        </div>
    )
}


export default LeftSidebar;