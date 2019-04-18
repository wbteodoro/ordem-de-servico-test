import {ADD_SERVICE} from "./type";
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