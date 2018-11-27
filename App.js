import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Camera from './componets/Camera';
import Info from './componets/Info';
import chalk from 'chalk';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = ({ navigation }) => (
  <View style={styles.container}>
    <Text>OOOOOO</Text>
    <Button title="Go to scan" onPress={() => navigation.navigate('Camera')} />
  </View>
);

const AppNavigator = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerTitleStyle: {
        color: '#373142',
        textAlign: 'center',
      },
    }),
  },
  Camera: {
    screen: Camera,
    navigationOptions: ({ navigation }) => ({
      title: 'Scan',
      headerStyle: {
        backgroundColor: '#373142',
      },
      headerTitleStyle: {
        color: '#eee',
        textAlign: 'center',
      },
    }),
  },
  Info: {
    screen: Info,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
    }),
  },
});

export default createAppContainer(AppNavigator);
