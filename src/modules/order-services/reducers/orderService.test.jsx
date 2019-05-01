import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";
import ReduxPromise from "redux-promise-middleware";
import orderService from './orderService';
import {ADD_CLIENT, ADD_SERVICE} from "../actions/type";

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

    it('should add client in client state', () => {
        const client = {
            name: 'test',
            email: 'email@test.com.br',
            phone: '5150555',
            cpf: '51050155',
            cnpj: null,
            fantasy_name: null,
            birth_date: null,
        };
        const reducer = orderService(undefined, { type: ADD_CLIENT, payload: client });

        expect(reducer).toMatchObject({
            client,
            services: []
        });
    });
    //it('', () => {});
    //it('', () => {});
});