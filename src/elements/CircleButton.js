import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color } = this.props;

    let bgColor = '#e42d7b';
    let textColor = '#ffffff';

    if (color === 'white'){
      bgColor = '#fff';
      textColor = '#e97f7c'
    }


    return(
      <View style={[styles.circleButton,style,{backgroundColor:bgColor}]}>
        <Text style={[styles.circleButtonTitle,{color:textColor}]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton:{
    position:'absolute',
    bottom:32,
    right:32
    ,width:48
    ,height:48
    ,borderRadius:24
    ,alignItems:'center'
    ,justifyContent: 'center'
    ,shadowColor:'#3c3b3b',
    shadowOffset:{width:0,height:0},
    shadowOpacity:1.2,
    shadowRadius:3,
  },
  circleButtonTitle:{
      fontSize:28
  }
  });

export default CircleButton;
