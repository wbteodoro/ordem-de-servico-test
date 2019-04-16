import {ADD_SERVICE} from "./type";

export const addService = service => ({
    type: ADD_SERVICE,
    payload: service
});