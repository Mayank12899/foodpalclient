import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.submit}>
          <Button style={styles.btn} contentStyle={{height: 50}} mode="contained" onPress={() => this.props.navigation.navigate('ScanScreen')}>
                Scan QR Code
          </Button>

          
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img:{
    alignSelf:'center'
  },
  submit:{
      flex: 1,
      padding: 30,
      alignContent: 'center',
      justifyContent: 'center'
  },
  btn:{
       marginTop: 20,
  }
})
