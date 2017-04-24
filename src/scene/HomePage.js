
import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import {
  AppRegistry,
  StyleSheet,
  Text,TextInput,
  DrawerLayoutAndroid,
  ToolbarAndroid,
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
   this.state = { text: 'Search Movies' };
  this.openDrawer = this.openDrawer.bind(this);
 }

 openDrawer() {
    this.drawer.openDrawer();
}

  onActionSelected(position) {
  }

  render() {

      var navigationView = (
         <View style={{flex: 1, backgroundColor: '#fff'}}>
           <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Home</Text>

           <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>About</Text>
         </View>
       );

    return (
  <DrawerLayoutAndroid
    drawerWidth={300}
    ref={(_drawer) => this.drawer = _drawer}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    renderNavigationView={() => navigationView}>
    <View style={styles.container}>

          <ToolbarAndroid
            style={styles.toolbar}
            title="Movies"
            titleColor =  "#5cc8ff"
            onIconClicked={this.openDrawer}
            navIcon={require("../assets/img/app_icon.png")}
            onActionSelected={this.onActionSelected}
            actions = {[
              {title: "Log out",  show: "always", iconName: 'person', iconColor:'#fff',iconSize:24 , titleColor:"#FFF"}
            ]}
            />

                <Text style={styles.welcome}>
                 Welcome to React Movies App!
               </Text>

                 <Text style={styles.instructions}>
                   To get started, edit index.android.js
                 </Text>
                 <TextInput
                    style={{height: 40,   alignSelf: 'stretch', color: 'white', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />

       <MovieList> </MovieList>


    </View>
  </DrawerLayoutAndroid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292f36',
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


});

AppRegistry.registerComponent('ReactMovies', () => HomePage);
