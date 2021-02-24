import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
//import {signIn} from '../actions/Actions'

import {authService} from '../services/auth.service';
import Connector from '../utils/Connector';
import PropTypes from 'prop-types';
import store from '../utils/store';

function LoginScreen({actions}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function login() {
    authService.login(userName, password).then((me) => {
      actions.saveMe(me);
      console.log(store.getState().auth);
      actions.authenticate();
      //history.push('/dashboard');
    });
  }

  return (
    <View style={styles.main}>
      <Image source={require('../assets/logo.png')} style={styles.img} />
      <View style={styles.login}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          label="Username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          foc
        />
        <TextInput
          style={styles.textin}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          foc
          secureTextEntry={true}
        />

        <Button
          style={styles.submit}
          contentStyle={{height: 50}}
          mode="contained"
          onPress={() => login()}>
          Submit
        </Button>

        <View style={styles.signupText}>
          <Text>
            Don't have account?{' '}
            <Text
              onPress={() => this.props.navigation.navigate('SignupScreen')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const ConnectedLogin = (props) => (
  <Connector>
    {({actions}) => <LoginScreen actions={actions.auth} {...props} />}
  </Connector>
);

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    margin: 20,
  },
  main: {
    flex: 1,
  },
  mainText: {
    margin: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 30,
  },
  textin: {
    marginTop: 10,
  },
  login: {
    flex: 0.75,
    width: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submit: {
    marginTop: 10,
  },
  loginText: {
    fontSize: 20,
    margin: 20,
    alignSelf: 'center',
  },
  signupText: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ConnectedLogin;
