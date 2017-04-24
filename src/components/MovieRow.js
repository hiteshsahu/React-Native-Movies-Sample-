import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Image,Text ,View,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const gutter = 3; // You can add gutter if you want


export default  class MovieRow extends Component {


  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View  style={ styles.item}>
      <Image style ={styles.thumb} source ={{uri:this.props.thumb}} />
      <Text  style={styles.title}  numberOfLines={2}>{this.props.title}{"\n"}</Text>
      <Text  style={styles.year}>{this.props.year}</Text>
      <Text  style={styles.content} numberOfLines={3}>{this.props.synopsis}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    color: '#5cc8ff',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
  },
  year: {
    color: '#d63c6b',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  content: {
    color: '#FFF',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },
 thumb:
 {
 width: (width - gutter * 3)/2,
  height: 300,
  left: 0,
  right: 0,
  top:0
},
 item: {
     borderRadius: 4,
     borderWidth: 0.5,
     borderColor: '#d6d7da',
     backgroundColor: '#757575',
     width: (width - gutter * 3)/2,
     marginBottom: gutter,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'flex-start',
   },

});
