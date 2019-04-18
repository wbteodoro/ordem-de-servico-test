import React, {Component} from 'react';
import FormServices from "./modules/order-services/components/FormServices/FormServices";

class App extends Component {

    state = {
        open: false,
        saved: {},
        editID: 0,
        data: [
            {description: 'Edit one', quantity: 10, value: 150},
            {description: 'Edit two', quantity: 20, value: 200}
        ]
    };

    formService = React.createRef();

    render() {
        return (
            <div>
                <pre>
                    {JSON.stringify(this.state.saved, null, 2)}
                </pre>
                <button onClick={() => this.formService.current.open()}>Open</button>
                <FormServices
                    ref={this.formService}
                    onSave={data => this.setState({saved: data, editID: this.state.editID+1 })}
                />
            </div>
        );
    }
}

export default App;