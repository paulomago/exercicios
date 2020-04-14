import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

// import { Container } from './styles';

export default class ValidarProps extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.label}
          {this.props.ano + 2000}
        </Text>
      </View>
    );
  }
}

ValidarProps.defaultProps = {
  label: 'Ano: ',
};

ValidarProps.propTypes = {
  ano: PropTypes.number.isRequired,
};
