import {ADD_CLIENT, ADD_SERVICE} from "../actions/type";

export default function orderService(_state = {
    client: {},
    services: []
}, action)
{
    const state ={..._state};

    switch (action.type) {

        case ADD_SERVICE:
            state.services.push(action.payload);
            return state;

        case ADD_CLIENT:
            state.client = action.payload;
            return state;

        default:
            return state;
    }
}


