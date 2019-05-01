import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormClient from "../FormClient/FormClient";
import {connect} from "react-redux";
import * as OrderServiceActions from '../../actions';
import {bindActionCreators} from "redux";



export class OrderServiceContainer extends Component {

    formClient = React.createRef();

    handleAddClient = () => {
        this.formClient.current.open();
    };

    handleSaveClient = () => {

    };

    render() {
        return (
            <div>
                <button onClick={e => this.formClient.current.open()}>
                    teste
                </button>
                <FormClient ref={this.formClient} onClickSaveButton={() => this.props.handleSaveClient()}/>
                {/*<CardClient />*/}
                {/*<Button onClick={() => this.handleAddClient()} >Add</Button>*/}

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(OrderServiceActions, dispatch);

const mapStateToProps = (store) =>  ({
    orderService: store.orderService
});

OrderServiceContainer.propTypes = {
    orderService: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderServiceContainer);