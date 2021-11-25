import React, { Component } from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LandingScreen from './src/setup/LandingScreen';
import LoginScreen from './src/account/LoginScreen';
import MainSCreen from './src/containers/dashboard/Main';
import RegisterScreen from './src/account/RegisterScreen';
import CryptoScreen from './src/containers/wallets/CryptoScreen';
import MpesaScreen from './src/containers/wallets/MpesaScreen';
import MTNScreen from './src/containers/wallets/MTNScreen';
import ContactScreen from './src/containers/topContainer/SelectContacts';
import SearchUserScreen from './src/containers/topContainer/SearchUserScreen';
import FindAgentScreen from './src/containers/agent/FindAgentScreen';
import AgentOrdersScreen from './src/containers/agent/AgentOrderScreen';
import ApplyAgentScreen from './src/containers/agent/ApplyAgentScreen';
import ConfirmCodeScreen from './src/account/ConfirmCodeScreen';
import ConfirmCodeScreen1 from './src/account/ConfirmCodeScreen1';
import PinScreen from './src/account/PinScreen';
import RegisterMethod from './src/account/RegisterMethod';
import RegisterEmail from './src/account/RegisterEmail';

const App = createStackNavigator({
  LandingScreen: {screen: LandingScreen},
  LoginScreen: {screen: LoginScreen},
  ConfirmCodeScreen: {screen: ConfirmCodeScreen},
  ConfirmCodeScreen1: {screen: ConfirmCodeScreen1},
  MainSCreen: {screen: MainSCreen},
  RegisterScreen: {screen: RegisterScreen},
  CryptoScreen: {screen: CryptoScreen},
  MpesaScreen: {screen: MpesaScreen},
  MTNScreen: {screen: MTNScreen},
  ContactScreen: {screen: ContactScreen},
  SearchUserScreen: {screen: SearchUserScreen},
  FindAgentScreen: {screen: FindAgentScreen},
  AgentOrdersScreen: {screen: AgentOrdersScreen},
  ApplyAgentScreen: {screen: ApplyAgentScreen},
  PinScreen: {screen: PinScreen},
  RegisterMethod: {screen: RegisterMethod},
  RegisterEmail: {screen: RegisterEmail}
},
{
headerMode: 'none'
},
{
  initialRouteName: 'LandingScreen',
  transitionConfig: () => fromBottom(),
});

export default createAppContainer(App);