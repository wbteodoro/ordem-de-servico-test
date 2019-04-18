import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";
import ReduxPromise from "redux-promise-middleware";
import orderService from './orderService';
import {ADD_SERVICE} from "../actions/type";

const mockStore = configureMockStore([Thunk, ReduxPromise]);

describe('Test orderService reducer', () => {

    var store;
    beforeEach(() => {
        store = mockStore({
            orderService: orderService(undefined, {})
        });
    });


    it('should add to service on service list', () => {
        const service = { quantity: 10, description: 'Test', value: 50 };
        const reducer = orderService(undefined, { type: ADD_SERVICE, payload: service });

        expect(reducer).toMatchObject({
            client: {},
            services: [
                service
            ]
        });
    });
    //it('', () => {});
    //it('', () => {});
});