import React, {Component} from 'react';
import FormClient from '../FormClient/FormClient';


class CardClient extends Component {

    formClient = React.createRef();

    openModal = () => {
        this.formClient.current.open()
    };

    atualizaEstado(dados)
    {
        console.log(dados)
    }

    render() {
        return (
            <div>
                <FormClient ref={this.formClient} onClickSaveButton={(dados) => this.atualizaEstado(dados)} />
            </div>
        );
    }
}

export default CardClient;