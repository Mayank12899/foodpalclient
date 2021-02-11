import React, { Component } from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        password: ""
    };
  }

  render() {
      const {userName} = this.state;
      const {password} = this.state;
    return (
      <View style={styles.main}>
        <Image source={require('../assets/logo.png')} style={styles.img} />
          <View style={styles.login}>
          <Text style={styles.loginText}>
              Login
          </Text>
            <TextInput
                label="Username"
                value={userName}
                onChangeText={text => this.setState({userName:text})}
                foc
            />
            <TextInput
                style={styles.textin}
                label="Password"
                value={password}
                onChangeText={text => this.setState({password:text})}
                foc
                secureTextEntry={true}
            />

            <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => this.props.navigation.navigate('MainScreen')}>
                Submit
            </Button>

            <View style={styles.signupText} >
                <Text>
                    Don't have account? <Text onPress={()=>this.props.navigation.navigate('SignupScreen')}>Sign Up</Text>
                </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    img:{
        alignSelf:'center',
        margin: 20
    },
    main:{
        flex: 1,
        
    },
    mainText:{
        margin: "10%",
        justifyContent:"center",
        alignSelf:"center",
        alignContent: 'center',
        fontSize: 30,
    },
    textin:{
        marginTop: 10,
    },
    login:{
        flex: 0.75,
        width: "85%",
        justifyContent:"center",
        alignSelf:"center",
    },
    submit:{
        marginTop: 10,
    },
    loginText:{
        fontSize: 20,
        margin: 20,
        alignSelf: "center"
    },
    signupText:{
        alignItems: "center",
        marginTop: 10,
    }
})

export default LoginScreen;