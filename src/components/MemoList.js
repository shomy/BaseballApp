import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class MemoList extends React.Component {
  render() {
    return(

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/07/28</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/07/28</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/07/28</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/07/28</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/07/28</Text>
          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  memoList:{
    width: '100%',
    paddingTop:0,
    flex:1
  },
  memoListItem:{
    padding:18,
    borderBottomWidth:1,
    borderBottomColor:'#cdcdd0',
    backgroundColor:'#f2f0f7'
  },
  memoListTitle:{
    fontSize:18,
    marginBottom:5
  },
  memoDate:{
    fontSize:12,
    color:'#babdbf'
  },
});

export default MemoList;
