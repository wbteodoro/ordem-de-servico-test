import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import Thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise-middleware'
import orderService from "./../modules/order-services/reducers/orderService";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(combineReducers({
    orderService,
}), composeEnhancers(
    applyMiddleware(Thunk, ReduxPromise)
));