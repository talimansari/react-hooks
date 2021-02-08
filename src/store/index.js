import {createStore,combineReducers} from "redux";
import productsReducers  from "./reducers/productsReducers";
import cartReducer from './reducers/cartReducer';
import FormData from './reducers/FormData';
import { devToolsEnhancer } from 'redux-devtools-extension';
const root = combineReducers({
    productsReducers,
    cartReducer,
    FormData
});

const store = createStore(root,devToolsEnhancer());
export default store;