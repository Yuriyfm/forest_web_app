import React from "react";
import DelyanasData from "./DelyanasData";
import {connect} from "react-redux";
import {updateDelyanasData} from "../../../redux/reducers/delyanasData-reducer";


let mapStateToProps = (state) => {
    console.log(state)
    return {
        DelyanasData: state.delyanasDataReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateData: () => {
            dispatch(updateDelyanasData())
        }
    }
}

const DelyanasDataContainer = connect(mapStateToProps, mapDispatchToProps)(DelyanasData)

export default DelyanasDataContainer;