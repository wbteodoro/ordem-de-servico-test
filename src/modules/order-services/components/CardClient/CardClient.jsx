import React, {Component} from 'react';
import FormClient from '../FormClient/FormClient';
import Button from '@material-ui/core/Button';


class CardClient extends Component {

    formClient = React.createRef();

    openModal = () => {
        this.formClient.current.open();
    };

    updateState(dados)
    {
        console.log(dados)
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={() => this.openModal()}>
                    Cadastrar
                </Button>
                <FormClient ref={this.formClient} onClickSaveButton={(dados) => this.updateState(dados)} onClickCloseButton={() => null} />
            </div>
        );
    }
}

export default CardClient;