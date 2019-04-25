import React, {Component} from 'react';
import { PropTypes } from "prop-types";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class FormClient extends Component {

    state = {
        infoClient: {
            name: '',
            phone: '',
            cpf: '',
            cnpj: '',
            birth_date: '',
            fantasy_name: '',
            email: '',
        },
        open: true,
        cnpjSelected: false
    };

    open = (infoClient) =>{
        this.setState({ infoClient: infoClient, open: true});
    };

    handleChange = (name, value) => {
        const state = {...this.state};
        state.infoClient[name] = value;
        this.setState(state);
    };

    handleChangeCpfAndCnpjSelect = () => {
      this.setState({ cnpjSelected: !this.state.cnpjSelected});
      if (!this.state.cnpjSelected) this.setState({ infoClient: { cnpj: "", fantasy_name: "" }});
      else this.setState({ infoClient: { cpf: "" }});

    };

    render() {

        return (
            <div>
                <Dialog open={this.state.open} fullWidth maxWidth={"sm"}>
                    <DialogTitle>
                        Adicionar/Editar Cliente
                    </DialogTitle>
                    <DialogContent style={{paddingTop: '10px'}}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    label="Nome"
                                    fullWidth
                                    value={this.state.infoClient.name}
                                    onChange={e => this.handleChange('name', e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    label="Data de Nascimento"
                                    value={this.state.infoClient.birth_date}
                                    onChange={e => this.handleChange('birth_date', e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <RadioGroup
                                    onChange={e => this.handleChangeCpfAndCnpjSelect()}
                                    row
                                >
                                    <FormControlLabel
                                        control={<Radio className={'radio-cpf'} color="primary" checked={!this.state.cnpjSelected}/>}
                                        label="CPF"
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        control={<Radio className={'radio-cnpj'} color="primary" checked={this.state.cnpjSelected}/>}
                                        label="CNPJ"
                                        labelPlacement="end"
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                {!this.state.cnpjSelected && (
                                    <TextField
                                        fullWidth
                                        label="CPF"
                                        value={this.state.infoClient.cpf}
                                        onChange={e => this.handleChange('cpf', e.target.value)}
                                        variant="outlined"
                                    />
                                )}

                                {this.state.cnpjSelected && (
                                    <TextField
                                        fullWidth
                                        label="CNPJ"
                                        value={this.state.infoClient.cnpj}
                                        onChange={e => this.handleChange('cnpj', e.target.value)}
                                        variant="outlined"
                                    />
                                )}
                            </Grid>
                            {this.state.cnpjSelected && (
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <div>
                                        <TextField
                                            fullWidth
                                            label="Nome Fantasia"
                                            value={this.state.infoClient.fantasy_name}
                                            onChange={e => this.handleChange('fantasy_name', e.target.value)}
                                            variant="outlined"
                                        />
                                        <br/>
                                    </div>
                                </Grid>
                            )}
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    label="e-mail"
                                    value={this.state.infoClient.email}
                                    onChange={e => this.handleChange('email', e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    fullWidth
                                    label="Telefone"
                                    value={this.state.infoClient.phone}
                                    onChange={e => this.handleChange('phone', e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button className={'save-button'} color="primary" variant={"contained"} onClick={() => this.props.onClickSaveButton(this.state.infoClient)}>
                            Salvar Dados
                        </Button>
                        <Button className={'cancel-button'} color="default" variant={"contained"} onClick={() => this.props.onClickCloseButton(this.state.infoClient)}>
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>


            </div>
        );
    }
}

FormClient.propTypes = {
    onClickSaveButton: PropTypes.func.isRequired,
    onClickCloseButton: PropTypes.func
};

export default FormClient;