import React, {Component} from 'react';
import OrderServiceContainer from './modules/order-services/components/OrderServiceContainer/OrderServiceContainer';
import {Provider} from "react-redux";
import { Store } from "./Store";

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <div>
                    <OrderServiceContainer />
                </div>
            </Provider>
        )
    }
}

export default App;