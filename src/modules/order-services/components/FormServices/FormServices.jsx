import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormServices extends Component {

    state = {
        data: {
            quantity: null,
            description: null,
            value: null
        },
        opened: false
    };

    handleClose = () => {
        this.props.onClose();
        this.setState({opened: false});
    };

    handleSave = () => {
        this.props.onSave(this.state.data);

        this.setState({
            opened: false,
            data: {
                quantity: null,
                value: null,
                description: null
            }});

        this.handleClose();
    };

    /**
     * this is used on inputs for change values of form state
     * @param name = state index
     * @param value state value
     */
    formHandleChange = (name, value) => {
        const state ={...this.state};
        state.data[name] = value;
        this.setState(state);
    };

    /**
     * this method open modal with: state.opened = true
     * and set form state
     * @param data = form state
     */
    open = (data = {quantity: null, description: null, value: null}) => this.setState({ opened: true, data});

    render() {
        return (
            <Dialog open={this.state.opened}>
                <DialogTitle id="alert-dialog-slide-title">
                    Adicionar/Editar Serviço
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={'Valor'}
                                value={this.state.data.value || ''}
                                onChange={e => this.formHandleChange('value', e.target.value)}
                                margin="normal" variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={'Quantidade'}
                                value={this.state.data.quantity || ''}
                                onChange={e => this.formHandleChange('quantity', e.target.value)}
                                margin="normal" variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                fullWidth
                                label={'Descrição'}
                                value={this.state.data.description || ''}
                                onChange={e => this.formHandleChange('description', e.target.value)}
                                margin="normal" variant="outlined"
                                multiline
                                rows={3}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" color="primary" onClick={this.handleSave} className={'btn-save'}>
                        Salvar
                    </Button>
                    <Button variant="contained" onClick={this.handleClose} className={'btn-close'}>
                        Cancelar
                    </Button>
                </DialogActions>

            </Dialog>
        );
    }
}

FormServices.defaultProps = {
    onClose: () => null
};

FormServices.propTypes = {
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func
};

export default FormServices;