import configureMockStore from "redux-mock-store";
import Thunk from "redux-thunk";
import ReduxPromise from "redux-promise-middleware";
import orderService from './../reducers/orderService';
import {ADD_CLIENT, ADD_SERVICE} from "../actions/type";
import {addClient, addService} from "./index";

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

    it('should dispatch ADD_CLIENT with data client in payload', function () {
        const client = {
            name: 'test',
            email: 'email@test.com.br',
            phone: '5150555',
            cpf: '51050155',
            cnpj: null,
            fantasy_name: null,
            birth_date: null,
        };

        store.dispatch(addClient(client));

        const actions = store.getActions();

        expect(actions[0].type).toEqual(ADD_CLIENT);
        expect(actions[0].payload).toEqual(client);
    });
});