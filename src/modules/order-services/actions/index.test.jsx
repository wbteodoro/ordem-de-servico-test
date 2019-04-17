import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";
import ReduxPromise from "redux-promise-middleware";
import orderService from './../reducers/orderService';
import {ADD_SERVICE} from "../actions/type";
import {addService} from "./index";

const mockStore = configureMockStore([Thunk, ReduxPromise]);

describe('Test order service actions', () => {

    var store;
    beforeEach(() => {
        store = mockStore({
            orderService: orderService(undefined, {})
        });
    });

    it('should dispatch ADD_SERVICE with service properties on payload',  () => {
        const service = { quantity: 10, description: 'test', value: 50 };

        store.dispatch(addService(service));

        const actions = store.getActions();

        expect(actions[0].type).toEqual(ADD_SERVICE);
        expect(actions[0].payload).toEqual(service);
    });

});