import React, {Component} from 'react';
import {Container, CaixaTexto, Titulo} from './styles';

export class Entrada extends Component {
  render() {
    return (
      <Container>
        <CaixaTexto
          value={this.props.texto}
          onChangeText={this.props.onChangeText}
        />
      </Container>
    );
  }
}

export class TextoSincronizado extends Component {
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
        <Entrada
          texto={this.state.texto}
          onChangeText={this.handleChangeText}
        />
      </Container>
    );
  }
}
