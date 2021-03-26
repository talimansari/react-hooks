import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {store,persistor} from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import './App.css';
import Nav from "./component/Nav";
import Home from "./component/Home";
import { Cart } from './component/Cart';
import Details from './component/Details';
import Calculator from './component/Calculator';
import TodoApp from './component/TodoApp';
import Form from './component/Form';
import LiveSearch from './component/LiveSearch';

const App = () => {
   return (
      <>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
         <Nav />
         <main>
            <Switch>
               <Provider store={store}>
               <Route exact path="/" component={Home}  />
               <Route exact path="/cart" component={Cart}  />
               <Route exact path="/details/:id" component={Details}  />
               <Route exact path="/calcu" component={Calculator}  />
               <Route exact path="/livesearch" component={LiveSearch}  />
               <Route exact path="/todoapp" component={TodoApp}  />
               <Route exact path="/form" component={Form}  />
              </Provider>
            </Switch>
         </main>
         </PersistGate>
         </Provider>
      </>
   );
}
export default App;