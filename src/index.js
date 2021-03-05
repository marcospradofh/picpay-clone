import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './Navigation';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#fff' />
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </>
  );
}