import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  data: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

const Info = ({ navigation }) => (
  <View>
    <Text style={styles.data}>{navigation.state.params.data}</Text>
    <Button title="App" onPress={() => navigation.navigate('App')} />
  </View>
);

export default Info;
