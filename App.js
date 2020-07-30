// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>memo</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/07/28</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/07/28</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/07/28</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/07/28</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/07/28</Text>
        </View>
      </View>

      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:60
  },
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
  memoList:{
    width: '100%',
    paddingTop:0
  },
  memoListItem:{
    padding:18,
    borderBottomWidth:1,
    borderBottomColor:'#cdcdd0',
    backgroundColor:'#e1e0e4'
  },
  memoListTitle:{
    fontSize:18,
    marginBottom:5
  },
  memoDate:{
    fontSize:12,
    color:'#babdbf'
  },
  memoAddButton:{
    position:'absolute',
    bottom:32,
    right:32
    ,width:48
    ,height:48
    ,backgroundColor:'#e42d7b'
    ,borderRadius:24
    ,alignItems:'center'
    ,justifyContent: 'center'
  },
  memoAddButtonTitle:{
      fontSize:28
      ,color:'#ffffff'
  }

});
