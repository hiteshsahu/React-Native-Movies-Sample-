import Style from '../Style';
import React, { Component } from 'react'
import {
  AsyncStorage,
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native'

export default class PreferenceContainer extends Component {
   constructor() {
      super();
      this.state = {
         'data': ''
      }
   }
   componentDidMount = () => {
      AsyncStorage.getItem('data').then((value) => {
         this.setState({'data': value});
      });
   }
   setData = (value) => {
      AsyncStorage.setItem('data', value);
      this.setState({'data': value});
   }
   render() {
      return (

         <View style = {Style.settings}>

         <Text style = {Style.setting_title}>
          Store In Preferences
         </Text>

        <TextInput
           style = {Style.input}
           autoCapitalize = 'none'
           onChangeText = {this.setData}
        />

        <Text style = { Style.settings_value }>
          From The Preference : {this.state.data}
        </Text>

     </View>
      );
   }
}
