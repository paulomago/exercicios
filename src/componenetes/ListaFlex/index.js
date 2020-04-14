import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import {Container, AlunoItem, Nota} from './styles';

const alunos = [
  {id: 1, nome: 'João', nota: 7.9},
  {id: 2, nome: 'Ana', nota: 4.1},
  {id: 3, nome: 'Bia', nota: 7.2},
  {id: 4, nome: 'Fabio', nota: 5.4},
  {id: 5, nome: 'Marcela', nota: 7.6},
  {id: 6, nome: 'Daniela', nota: 3.8},
  {id: 7, nome: 'Lucas', nota: 5.9},
  {id: 8, nome: 'Guilherme', nota: 7.0},
  {id: 9, nome: 'Suzana', nota: 9.3},
  {id: 10, nome: 'Sandra', nota: 9.3},
  {id: 11, nome: 'João', nota: 7.9},
  {id: 12, nome: 'Ana', nota: 4.1},
  {id: 13, nome: 'Bia', nota: 7.2},
  {id: 14, nome: 'Fabio', nota: 5.4},
  {id: 15, nome: 'Marcela', nota: 7.6},
  {id: 16, nome: 'Daniela', nota: 3.8},
  {id: 17, nome: 'Lucas', nota: 5.9},
  {id: 18, nome: 'Guilherme', nota: 7.0},
  {id: 19, nome: 'Suzana', nota: 9.3},
];

export default class ListaFlex extends Component {
  renderItem = ({item}) => {
    return (
      <AlunoItem>
        <Text>Nome: {item.nome} </Text>
        <Nota>Nota: {item.nota} </Nota>
      </AlunoItem>
    );
  };

  render() {
    return (
      <Container>
        <FlatList
          data={alunos}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </Container>
    );
  }
}
