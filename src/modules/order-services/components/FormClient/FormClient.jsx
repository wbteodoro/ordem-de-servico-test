import React, {Component} from 'react';
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class FormClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            telefone: '',
            cpf: '',
            rg: '',
            nomeFantasia: ''
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {

        const { classes } = this.props;

        return (
            <div style={{width: '1000px'}}>
                <TextField
                    id="outlined-name"
                    label="Nome"
                    className={classes.textField}
                    value={this.state.value}
                    onChange={(e) => this.handleChange('nome')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    id="outlined-name"
                    label="Telefone"
                    className={classes.textField}
                    value={this.state.value}
                    onChange={this.handleChange('telefone')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    label="CPF"
                    className={classes.textField}
                    value={this.state.value}
                    onChange={this.handleChange('cpf')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    label="RG"
                    className={classes.textField}
                    value={this.state.value}
                    onChange={this.handleChange('rg')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    label="Nome Fantasia"
                    className={classes.textField}
                    value={this.state.value}
                    onChange={this.handleChange('nomeFantasia')}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        );
    }
}

FormClient.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormClient);