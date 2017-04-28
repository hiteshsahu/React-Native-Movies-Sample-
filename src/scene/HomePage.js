import Style from '../Style';
import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableOpacity,
  View
} from 'react-native';

export default class HomePage extends Component {

  renderNavigationView() {
    return <View>
      <Text>Home</Text>
    </View>
  }

  constructor(props) {
   super(props);
   this.state = { text: 'Search Movies' ,
 };
   this.openDrawer = this.openDrawer.bind(this);
   this.goToAbout = this.goToAbout.bind(this);
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

  render() {

  var navigationView = (
     <View style={{flex: 1, backgroundColor: '#292f36'}}>

       <Image style ={Style.thumb} source = {require('../assets/img/header.jpg')} />
       <Text  style = {Style.button} >Home</Text>

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

        <View style={Style.container}>

          <ToolbarAndroid
            style={Style.toolbar}
            title="Movies"
            titleColor =  "#5cc8ff"
            onIconClicked={this.openDrawer}
            navIcon={require("../assets/img/menu.png")}
            onActionSelected={this.onActionSelected}
            actions = {[
              {title: "Log out",  show: "always", iconName: 'person', iconColor:'#fff',iconSize:24 , titleColor:"#FFF"}
            ]}
            />
                <Text style={Style.welcome}>
                 Welcome to React Movies App!
               </Text>

                 <Text style={Style.instructions}>
                 Start Typing to Search Movie
                  </Text>

                 <TextInput
                    style={Style.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />

       <MovieList  navigator={this.props.navigator} > </MovieList>

    </View>
  </DrawerLayoutAndroid>

    );
  }
}

AppRegistry.registerComponent('HomePage', () => HomePage);
