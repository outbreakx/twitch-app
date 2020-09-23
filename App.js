import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavTabs from './src/navTabs';

import Header from './src/components/Header';
import { View } from 'react-native';

export default function App() {
  return <NavigationContainer>
	  <StatusBar hidden={true} />
	  <Header/>
	  <NavTabs/>

  </NavigationContainer>
}