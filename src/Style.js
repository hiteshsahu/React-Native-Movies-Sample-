/**
 * Style.js
 *
 * Created by kylewbanks on 2016-08-07.
 */
'use strict';

import { StyleSheet ,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

var Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292f36',
  },
  button: {
     borderWidth: 1,
     padding: 10,
     borderColor: 'black',
     color: '#5cc8ff',
     fontSize: 18,
     fontFamily: 'Roboto-Medium',
     backgroundColor: '#292f36'
  },
  input:
  {
      height: 40,
      width: width,
      alignSelf: 'stretch',
      color: '#292f36',
      borderWidth: 1,
      backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
 toolbar: {
   backgroundColor: '#131313',
   height: 56,
   alignSelf: 'stretch',
 },
 thumb:{
  width: 300,
  height: 200,
  left: 0,
  right: 0,
  top:0
},
 settings: {
    flex: 1,
    width:width,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 15,
    marginLeft :15,
    backgroundColor: '#292f36',
  },
    setting_title: {
      fontSize: 17,
      textAlign: 'center',
      color: '#FFF',
      margin: 5,
    },
    settings_value: {
      fontSize: 15,
      textAlign: 'center',
      color: '#FFF',
      margin: 5,
    },
    divider: {
      width: width ,
      height:2,
      margin: 10,
      backgroundColor: '#131313',
    },
    picker: {
    color: '#FFF',
    width: width,
    margin: 10,
  },
  slider: {
  width: width,
  margin: 10,
},
});

export default Style;
