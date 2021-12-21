import React from "react";
import s from './DelyanasData.module.css'


const DelyanasData = (props) => {
    let state = props.updateData();
    console.log(state)
    // let DataElements = state.map ((dialog) => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} /> );

    return (
        <div>
            hey hey
        </div>
    )
}


export default DelyanasData;