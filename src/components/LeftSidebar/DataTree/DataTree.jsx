import React from "react";
import s from './DataTree.module.css'
import {dataAPI} from "../../../api/api";

const DataTree = (data) => {
         dataAPI.getData().then(res => {
        data = res.data
    })
    return (
        <div className={s.nav}>
            <div>

            </div>
        </div>
    )
}

export default DataTree;