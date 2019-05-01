import {ADD_CLIENT, ADD_SERVICE} from "./type";
import PropTypes from 'prop-types';


export const addService = (service) => {
    const types = {
        description: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    };

    PropTypes.checkPropTypes(types, service);

    return {
        type: ADD_SERVICE,
        payload: service
    }
};

export const addClient = (data) => {
     return {
        type: ADD_CLIENT,
        payload: data
    }
};