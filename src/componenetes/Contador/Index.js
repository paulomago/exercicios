import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Theme from '../../styles/themes/padrao';
import Style from './styles';
// import { Container } from './styles';

export default class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: this.props.numeroInicial,
    };
  }

  mainUm = () => {
    this.setState({numero: ++this.state.numero});
  };

  limpar = () => {
    this.setState({numero: 0});
  };

  render() {
    return (
      <View>
        <Text style={[Theme.ex, Style.contador]}>{this.state.numero}</Text>

        <TouchableHighlight onPress={this.mainUm} onLongPress={this.limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
