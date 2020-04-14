import React, {Component} from 'react';

import {View, Button, Alert, ToastAndroid, Platform} from 'react-native';

// import { Container } from './styles';

export default class Plataformas extends Component {
  notificar = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      Alert.alert('Informação', msg);
    }
  };
  render() {
    return (
      <View>
        <Button
          title="Plataforma?"
          onPress={() => this.notificar('Parabéns!')}
        />
      </View>
    );
  }
}
