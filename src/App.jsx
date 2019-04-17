import React, {Component} from 'react';
import FormServices from "./modules/order-services/components/FormServices/FormServices";

class App extends Component {
    state = {
        open: false
    };

    render() {
        return (
            <div>
                <button onClick={e => this.setState({open: true})}>Open</button>
                <FormServices open={this.state.open} onClose={e => this.setState({ open: false })}/>
            </div>
        );
    }
}

export default App;