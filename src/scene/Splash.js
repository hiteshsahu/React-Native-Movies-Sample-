import Style from '../Style';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,Image,
  Navigator,Dimensions,
  View
} from 'react-native';
export default class Splash extends Component {

constructor(props) {
   super(props);
   this.goToHome = this.goToHome.bind(this);

 }

 goToHome() {
      this.props.navigator.push({
         name: 'Home',
         title: 'Home',
         openMenu: this.openMenu
      });
   }

  componentDidMount() {
     console.log('Component DID MOUNT!')
     setTimeout(this.goToHome, 500);
  }

  render() {
    return (

      <View style={Style.containerDetail}>
       {/* Background image with large image */}
       <Image source={require('../assets/img/splash.jpg')} style={Style.splashBackground}>
         {/* Use ScrollView in case plot is too large to fit on the screen */}

        <Text style={Style.splashText}>
             React Movies
        </Text>

        <Text style={Style.content}>
            React JS Sample
        </Text>

       </Image>
     </View>

    );
  }
}
