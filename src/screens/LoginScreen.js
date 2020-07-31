import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableHighlight} from 'react-native';
import CircleButton from '../elements/CircleButton'

class LoginScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="Email address"/>
        <TextInput style={styles.input} value="password"/>
        <TouchableHighlight style={styles.button} onPress={()=>{}}>
          <Text style={styles.buttonTitle}>送信</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
    ,width:'100%'
    ,padding:24
    ,backgroundColor:'#ffffff'
  },
  input:{
    backgroundColor:'#f9f2f0'
    ,height:40
    ,marginBottom:16
    ,borderWidth:1
    ,borderColor:'#bfbfba'
    ,padding:8
    ,color:'#c2c1c6'
  },
  title:{
    fontSize:20
    ,alignSelf:'center'
    ,marginBottom:24
  },
  button:{
    backgroundColor:'#e42d7b'
    ,height:40
    ,borderRadius:8
    ,justifyContent:'center'
    ,alignItems:'center'
    ,width:'70%'
    ,alignSelf:'center'
  },
  buttonTitle:{
    color:'#ffffff'
    ,fontSize:14
  },


});

export default LoginScreen;
