import React, {Component} from 'react';

import {View, Text} from 'react-native';
import Theme from '../../styles/themes/padrao';
// import { Container } from './styles';

export default class Simples extends Component {
  render() {
    return (
      <View>
        <Text style={Theme.ex}>Arrow 1: {this.props.texto}</Text>
      </View>
    );
  }
}
