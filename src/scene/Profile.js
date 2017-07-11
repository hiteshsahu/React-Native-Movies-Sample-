import Style from '../Style';
import React, { Component } from 'react';
import WebPageLoader from '../components/WebLoader';
import {
  AppRegistry,
  Text,
  Navigator,Image,WebView,
  DrawerLayoutAndroid,TouchableHighlight,
  ToolbarAndroid,ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
export default class DevProfile extends Component {

  renderNavigationView() {
          return <View>
            <Text>Dev</Text>
          </View>
        }

  constructor(props) {
       super(props);
       this.state = { text: 'Search Movies' };
       this.openDrawer = this.openDrawer.bind(this);
       this.goToAbout = this.goToAbout.bind(this);
       this.goToHome = this.goToHome.bind(this);
      this.goBack = this.goBack.bind(this);
     }

 openDrawer() {
    this.drawer.openDrawer();
  }

  onActionSelected(position) {
  }

  goToAbout() {
        this.props.navigator.push({
        name: 'About',
        title: 'About',
     });
  }

  goToHome() {
       this.props.navigator.push({
          name: 'Home',
          title: 'Home',
          openMenu: this.openMenu
       });
    }

    goBack() {
        this.props.navigator.pop();
      }

render() {

    var navigationView = (
       <View  style={{flex: 1, backgroundColor: '#292f36'}}>
         <Image style ={Style.thumb} source = {require('../assets/img/header.jpg')} />
         <TouchableOpacity
           onPress = {this.goToHome}>
           <Text  style = {Style.button}>
            Home
           </Text>
         </TouchableOpacity>

         <TouchableOpacity
         onPress = {this.goToAbout}>
         <Text style =  {Style.button}>
            About
         </Text >
      </TouchableOpacity>

       </View>
     );

return (
        <DrawerLayoutAndroid
              drawerWidth={300}
              ref={(_drawer) => this.drawer = _drawer}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>

        <View >
        <ScrollView>

          <ToolbarAndroid
            style={Style.toolbar}
            title="Dev Profile"
            titleColor =  "#5cc8ff"
            onIconClicked={this.goBack}
            navIcon={require("../assets/img/back_arrow.png")}
            onActionSelected={this.onActionSelected}
            actions = {[
              {title: "Log out",  show: "always", iconName: 'person', iconColor:'#fff',iconSize:24 , titleColor:"#FFF"}
            ]}
            />


      <View style={Style.imageBackground}>
         <WebView
            source = {{ uri: 'https://google.com' }}
         />

       </View>

            </ScrollView>
            </View>
  </DrawerLayoutAndroid>

    );
}
}
