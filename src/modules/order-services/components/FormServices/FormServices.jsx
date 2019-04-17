import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const initialState = {
    quantity: null,
    description: null,
    value: null
};

class FormServices extends Component {

    state = initialState;

    formHandleChange(name, value)
    {
        const state = {...this.state};
        state[name] = value;
        this.setState(state);
    }

    handleClose = () => {
        this.props.onClose();
    };

    handleSave = () => {
        this.props.onSave(this.state);

    };

    render() {
        return (
            <Dialog
                open={this.props.open}
                keepMounted
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Adicionar/Editar Serviço
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={'Valor'}
                                value={this.state.value || ''}
                                onChange={e => this.formHandleChange('value', e.target.value)}
                                margin="normal" variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label={'Quantidade'}
                                value={this.state.quantity || ''}
                                onChange={e => this.formHandleChange('quantity', e.target.value)}
                                margin="normal" variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                fullWidth
                                label={'Descrição'}
                                value={this.state.description || ''}
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
    onSave: () => null,
    onClose: () => null,
    open: false
};

FormServices.propTypes = {
    onSave: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default FormServices;