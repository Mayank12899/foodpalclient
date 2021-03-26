import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '../reducers/restaurantSlice';

export default function ScanScreen({navigation}){
  const dispatch = useDispatch();
  var mee = useSelector((state) => state.signin.token);
  const getRest = () =>{
    // console.log("We will get data");
    // console.log(data);
    dispatch(getRestaurant(mee));
    // console.log("Me: ",mee);
}

 const onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    console.log(e.data);
    var data= JSON.parse(e.data);
    // console.log(data.id);
    // getRest();
    navigation.navigate('RestaurantScreen', {"id": data.id});
    //Redux --> DB --> then --> Navigate to Restraunt Menu 
  };

 
    return (
        <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Scan the QR Code
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }


const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });