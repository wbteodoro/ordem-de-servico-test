const initialState = {
    client:{},
    services: []
};

export default function orderService(_state = initialState, action)
{
    const state ={..._state};

    switch (action.type) {

        default:
            return state;
    }
}