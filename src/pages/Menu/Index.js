import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';

// import ContactUs from '../ContactUs/Index';
// import Settings from '../Settings/Index';
import Simples from '../../componenetes/Simples/Index';
import ParImpar from '../../componenetes/ParImpar/Index';
import Contador from '../../componenetes/Contador/Index';
import Plataformas from '../../componenetes/Plataformas/Index';
import ValidarProps from '../../componenetes/ValidarProps/Index';
import Evento from '../../componenetes/Evento/Index';
import {Inverter, MegaSena} from '../../componenetes/Multi/Index';
import {Avo} from '../../componenetes/ComunicacaoDireta/index';
import ListaFlex from '../../componenetes/ListaFlex/index';
import {TextoSincronizado} from '../../componenetes/ComunicacaoIndireta/index';

const MyDrawer = createDrawerNavigator();

function SimplesScreen({navigation}) {
  return <Simples texto="Exemplo Simples!" />;
}

function ParImparScreen({navigation}) {
  return <ParImpar numero={31} />;
}

function InverterScreen({navigation}) {
  return <Inverter texto="Teste de inversão!" />;
}

function MegaSenaScreen({navigation}) {
  return <MegaSena numeros={8} />;
}

function ContadorScreen({navigation}) {
  return <Contador numeroInicial={50} />;
}

function PlataformasScreen({navigation}) {
  return <Plataformas />;
}

function ValidarPropsScreen({navigation}) {
  return <ValidarProps ano={20} />;
}

function EventoScreen({navigation}) {
  return <Evento texto="Teste" />;
}

function AvoScreen({navigation}) {
  return <Avo nome="Paulo" sobrenome="da Silva" />;
}

function TextoSincronizadoScreen({navigation}) {
  return <TextoSincronizado nome="Paulo" sobrenome="da Silva" />;
}

function ListaFlexScreen({navigation}) {
  return <ListaFlex />;
}

function DrawerContainer() {
  const dimensions = useWindowDimensions();

  return (
    <MyDrawer.Navigator
      initialRouteName="Lista Flex"
      drawerType={dimensions.width > 900 ? 'permanent' : 'front'}>
      <MyDrawer.Screen name="Lista Flex" component={ListaFlexScreen} />
      <MyDrawer.Screen
        name="Texto Sincronizado"
        component={TextoSincronizadoScreen}
      />
      <MyDrawer.Screen name="Filhos" component={AvoScreen} />
      <MyDrawer.Screen name="Evento" component={EventoScreen} />
      <MyDrawer.Screen name="Validar Props" component={ValidarPropsScreen} />
      <MyDrawer.Screen name="Notificar" component={PlataformasScreen} />
      <MyDrawer.Screen name="Contador" component={ContadorScreen} />
      <MyDrawer.Screen name="Mega Sena" component={MegaSenaScreen} />
      <MyDrawer.Screen name="Inverter" component={InverterScreen} />
      <MyDrawer.Screen name="Par ou Impar" component={ParImparScreen} />
      <MyDrawer.Screen name="Simples" component={SimplesScreen} />
      {/* <MyDrawer.Screen name="Contact Us" component={ContactUs} /> */}
      {/* <MyDrawer.Screen name="Settings" component={Settings} /> */}
    </MyDrawer.Navigator>
  );
}

export default class Menu extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerContainer />
      </NavigationContainer>
    );
  }
}
