import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class ListServices extends Component {

  handleClickDeleteButton = key => {
    if(window.confirm("Are you sure you want to delete this service?"))
    {
     this.props.onClickServiceDeleteButton(key)
    } 
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Serviço</TableCell>
              <TableCell align="right">Qtd.</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.services.map((item, key) => (
                <TableRow key={key}>
                    <TableCell>{item.description}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.value}</TableCell>
                    <TableCell align="right">{item.quantity*item.value}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" className="edit-button" onClick={e => this.props.onClickServiceEditButton(key)}>Editar</Button>
                      <IconButton aria-label="Delete" className="delete-button" onClick={e => this.handleClickDeleteButton(key)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                </TableRow>
              ))}
              {this.props.services.length === 0 && (<div className="no-services">Não há nenhum serviço cadastrado...</div>)}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}


ListServices.propTypes = {
    services: PropTypes.array.isRequired,
    onClickServiceDeleteButton: PropTypes.func.isRequired,
    onClickServiceEditButton: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(ListServices)