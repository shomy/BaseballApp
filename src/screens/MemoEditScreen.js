import React from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import CircleButton from '../elements/CircleButton'

class MemoEditScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TextInput style={styles.mempEditInput} multiline value='hi'/>
        <CircleButton style={styles.saveButton}>save</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%'
  },
  mempEditInput:{
    backgroundColor:'#ddd'
    ,flex:1
    ,paddingTop:32
    ,paddingLeft:16
    ,paddingRight:16
    ,paddingBottom:16
    ,fontSize:16
  },
  saveButton:{
    fontSize:12
  },

});

export default MemoEditScreen;
