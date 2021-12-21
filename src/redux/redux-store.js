import {combineReducers, createStore} from 'redux'
import {delyanasDataReducer} from "./reducers/delyanasData-reducer";


let reducers = combineReducers({
    delyanasDataReducer: delyanasDataReducer
});

let store = createStore(reducers);

export default store;