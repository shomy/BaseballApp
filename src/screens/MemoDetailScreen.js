import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>企業名</Text>
              <Text style={styles.memoHeaderTel}>080-1403-1064</Text>
              <Text style={styles.memoHeaderDate}>2020-12-12</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>荷電したら怒られた</Text>
        </View>

        <CircleButton color='white' style={styles.editButton}>＋</CircleButton>

      </View>

    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%'
  },
  memoHeader: {
    height:100
    ,backgroundColor:'#565978'
    ,justifyContent:'center'
    ,padding:10
    ,marginBottom:0
  },
  memoHeaderTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#ffffff'
  },
  memoHeaderTel:{
    fontSize:12,
    color:'#ffffff'
  },
  memoHeaderDate:{
    fontSize:12,
    color:'#ffffff'
  },
  memoContent:{
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'#e6eaf5',
    flex:1,
  },
  editButton:{
    top: 30,
  },

});

export default MemoDetailScreen
