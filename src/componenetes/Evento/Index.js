import React, {Component} from 'react';
import {Container, CaixaTexto, Titulo} from './styles';

export default class Evento extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: '',
    };
  }

  handleChangeText = (texto) => {
    this.setState({texto});
  };

  render() {
    return (
      <Container>
        <Titulo>{this.state.texto}</Titulo>
        <CaixaTexto
          value={this.state.texto}
          onChangeText={this.handleChangeText}
        />
      </Container>
    );
  }
}
