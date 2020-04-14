import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

const fonte = {style: {fontSize: 30}};

function filhosComProps(props) {
  return React.Children.map(props.children, (c) =>
    React.cloneElement(c, {...props, ...c.props}),
  );
}

export const Filho = (props) => (
  <Container>
    <Text {...fonte}>
      Filho: {props.nome} {props.sobrenome}
    </Text>
  </Container>
);

export const Pai = (props) => (
  <Container>
    <Text {...fonte}>
      Pai: {props.nome} {props.sobrenome}
    </Text>
    {filhosComProps(props)}
  </Container>
);

export const Avo = (props) => (
  <Container>
    <Text {...fonte}>
      Avo: {props.nome} {props.sobrenome}
    </Text>
    <Pai nome="André" sobrenome={props.sobrenome}>
      <Filho nome="Ana" />
      <Filho nome="Gui" />
      <Filho nome="Davi" />
    </Pai>
    <Pai {...props} nome="Pedro">
      <Filho nome="Rebeca" />
      <Filho nome="Renato" />
    </Pai>
  </Container>
);
