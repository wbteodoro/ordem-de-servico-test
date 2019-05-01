import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class CardClient extends Component {
  render() {

    return (
      <Card>
        <CardContent>
          {/* As informações virão da variavel dados do FormClient*/}
            <Typography color="textSecondary" gutterBottom>
              Nome: {this.props.serviceOrder.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              CPF: {this.props.serviceOrder.cpf}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              CNPJ: {this.props.serviceOrder.cnpf}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Telefone: {this.props.serviceOrder.phone}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Data de Nascimento: {this.props.serviceOrder.birth_date}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              E-mail: {this.props.serviceOrder.email}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Nome Fantasia:{this.props.serviceOrder.fantasy_name}
            </Typography>
        </CardContent>
      </Card>      
    )
  }
}


CardClient.propTypes = {
    serviceOrder: PropTypes.object.isRequired,
}

export default CardClient