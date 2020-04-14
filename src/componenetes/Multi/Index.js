import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Theme from '../../styles/themes/padrao';

class Inverter extends Component {
  render() {
    const inv = this.props.texto.split('').reverse().join('');
    return (
      <View>
        <Text style={Theme.ex}>{inv}</Text>
      </View>
    );
  }
}

class MegaSena extends Component {
  render() {
    const [min, max] = [1, 60];
    const resultado = Array(this.props.numeros || 6).fill(0);

    for (let i = 0; i < resultado.length; i++) {
      let novo = 0;
      while (resultado.includes(novo)) {
        novo = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      resultado[i] = novo;
    }

    resultado.sort((a, b) => a - b);
    return (
      <View>
        <Text style={Theme.ex}>{resultado.join(', ')}</Text>
      </View>
    );
  }
}

export {Inverter, MegaSena};
