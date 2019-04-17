import {ADD_SERVICE} from "./type";

export const addService = (service) => {
    return {
        type: ADD_SERVICE,
        payload: service
    }
};