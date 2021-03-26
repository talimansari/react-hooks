import {createStore,combineReducers,applyMiddleware} from "redux";
import {persistStore,persistReducer  } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import productsReducers  from "./reducers/productsReducers";
import cartReducer from './reducers/cartReducer';
import FormData from './reducers/FormData';
import { composeWithDevTools  } from 'redux-devtools-extension';
const root = combineReducers({
    productsReducers,
    cartReducer,
    FormData,
    
});
const persistConfig = {
    key:"root",
    storage
    
}
const persistedReducer = persistReducer(persistConfig,root)
const store = createStore(persistedReducer ,composeWithDevTools(
    applyMiddleware()
    
  ));
const persistor = persistStore(store);
export  {store,persistor};