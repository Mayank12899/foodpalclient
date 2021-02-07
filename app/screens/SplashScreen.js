import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.submit}>
            <Button style={styles.btn} contentStyle={{height: 50, width: "80%"}} mode="contained" onPress={() => this.props.navigation.navigate('LoginScreen')}>
                Login
            </Button>
            <Button style={styles.btn}contentStyle={{height: 50, width: "80%"}} mode="contained" onPress={() => this.props.navigation.navigate('SignupScreen')}>
                Sign Up
            </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    submit:{
        marginTop: 10,
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    btn1:{
        justifyContent: "center",
        marginTop: "80%"
    },
    btn:{
        marginTop: 20,

    }
})