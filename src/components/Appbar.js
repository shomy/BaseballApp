import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

class Appbar extends React.Component {
  render() {
    return(
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>memo</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar:{
      position: 'absolute',
      top:0,
      left:0,
      right:0,
      height:60,
      paddingTop: 30,
      backgroundColor: '#6a5f8f',
      justifyContent:'center',
      alignItems: 'center',
      shadowColor:'#000000',
      shadowOffset:{width:0,height:0},
      shadowOpacity:0.5,
      shadowRadius:3,
      zIndex:10
  },
  appbarTitle:{
    color: '#e4f0f4',
    fontSize:18,
  },
  });

export default Appbar;
