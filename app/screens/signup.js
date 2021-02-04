import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

class signup extends Component {
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
        <Text style={styles.mainText}>
            FoodPal 
        </Text>
          <View style={styles.login}>
          <Text style={styles.loginText}>
              Signup
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

            <Button style={styles.submit} contentStyle={{height: 50}} mode="contained" onPress={() => console.log(userName, password)}>
                Submit
            </Button>

            <View style={styles.signupText} >
                <Text>
                    Already have an account? <Text onPress={()=>console.log("Route it to Login component")}>Login</Text>
                </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default signup;