import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#373142',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.navigation.state.params.reactivate && this.forceUpdate();
  }

  onRead = ({ data }) => {
    console.log('->->', data);
    this.props.navigation.navigate('Info', { data });
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onRead}
          showMarker={true}
          bottomContent={
            <View>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </View>
          }
        />
      </View>
    );
  }
}

export default Camera;