import {ADD_SERVICE} from "../actions/type";

const initialState = {
    client:{},
    services: []
};

export default function orderService(_state = initialState, action)
{
    const state ={..._state};

    switch (action.type) {

        case ADD_SERVICE:
            state.services.push(action.payload);
            return state;

        default:
            return state;
    }
}