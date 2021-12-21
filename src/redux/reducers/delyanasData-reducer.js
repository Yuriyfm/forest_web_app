import {dataAPI} from '../../api/api'

const UPDATE_DATA_TREE = 'UPDATE_DATA_TREE'

const initialState = {
    DelyanasData: []}
    console.log(initialState)

export const delyanasDataReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_DATA_TREE: {
            let data = dataAPI.getData().then(res => {
                return res.data
            })
            return {data}
        }
        default:
            return state;
    }
}

export const updateDelyanasData = () => ({type: UPDATE_DATA_TREE})