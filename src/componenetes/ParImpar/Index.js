import React, {Component} from 'react';

import {View, Text} from 'react-native';
import Theme from '../../styles/themes/padrao';
// import { Container } from './styles';

function parOuImpart(num) {
  if (num % 2 === 0) {
    return <Text style={Theme.ex}>Par</Text>;
  } else {
    return <Text style={Theme.ex}>Impar</Text>;
  }
}

export default class ParImpar extends Component {
  render() {
    return <View>{parOuImpart(this.props.numero)}</View>;
  }
}
