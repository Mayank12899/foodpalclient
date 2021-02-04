import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


export default class splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
            <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => console.log("Route to login Page")}>
                Login
            </Button>
            <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => console.log("Route to Register Page")}>
                Sign Up
            </Button>
      </View>
    );
  }
}

const styles = new StyleSheet({
    submit:{
        marginTop: 10,
        flex: 2
    },
})