import React, {Component} from 'react';
import ListServices from './modules/order-services/components/ListServices/ListServices';

class App extends Component {
    render() {
        return (
            <div>
                <ListServices
                    services={[
                        {description: 'comprar parafuso', quantity: 10, value: 10},
                        {description: 'comprar broca', quantity: 5, value: 120}
                    ]}        
                    onClickServiceDeleteButton={() => null}
                    onClickServiceEditButton={() => null}
                />
            </div>
        )
    }
}

export default App;