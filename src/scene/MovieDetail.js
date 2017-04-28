import Style from '../Style';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,TextInput,Image,
  Navigator,Dimensions,
  DrawerLayoutAndroid,
  ToolbarAndroid,ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');
const gutter = 3; // You can add gutter if you want

export default class MovieDetail extends Component {

  renderNavigationView() {
    return <View>
      <Text>Detail</Text>
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


  render({ movie } = this.props) {

 const { title,cover, year, synopsis } = movie;

  var navigationView = (
     <View style={{flex: 1, backgroundColor: '#292f36'}}>
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

        <View style={Style.container}>
        <ScrollView>

          <ToolbarAndroid
            style={Style.toolbar}
            title="Movies"
            titleColor =  "#5cc8ff"
            onIconClicked={this.goBack}
            navIcon={require("../assets/img/back_arrow.png")}
            onActionSelected={this.onActionSelected}
            actions = {[
              {title: "Log out",  show: "always", iconName: 'person', iconColor:'#fff',iconSize:24 , titleColor:"#FFF"}
            ]}
            />

      <View style={styles.container}>
       {/* Background image with large image */}
       <Image source={{uri: cover}} style={styles.imageBackground}>
         {/* Use ScrollView in case plot is too large to fit on the screen */}
         <ScrollView
           style={styles.plot}
         >

            <Text style={Style.welcome}>
             Movie Detail
           </Text>
            <Text  style={styles.title} >{title}{"\n"}</Text>
            <Text  style={styles.year}>Year - {year}</Text>
            <Text  style={styles.content}>{synopsis}</Text>
     </ScrollView>
            {/* Button container */}
         <View style={styles.buttonContainer}>
           {/* Press handler */}
           <TouchableOpacity
             // Go to the previous screen
             onPress={() => {this.props.navigator.pop();}}
             // Dim button a little bit when pressed
             activeOpacity={0.7}
             // Pass button style
             style={styles.button}
           >
             <Text style={styles.buttonText}>CLOSE</Text>
           </TouchableOpacity>
         </View>
       </Image>
     </View>


            </ScrollView>
            </View>
  </DrawerLayoutAndroid>

    );
  }
}

AppRegistry.registerComponent('MovieDetail', () => MovieDetail);

const styles = StyleSheet.create({

  // Main container
 container: {
   flex: 1,                            // Take up all screen space
   backgroundColor: '#333',            // Dark background
 },
 // Background image
 imageBackground: {
   flex: 1,
   width:width,
   height:height,                      // Take up all screen space
   padding: 20                         // Add padding for content inside
 },
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
 width: (width - gutter * 3)/(2),
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
     width: (width - gutter * 3)/(2),
     marginBottom: gutter,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'flex-start',
   },
   buttonContainer: {
    marginTop: 20,                      // Add some margin at the top
  },
  button: {
    backgroundColor: '#617D8A',         // Color the button
    padding: 15                         // Padding inside
  },
  buttonText: {
    color: '#fff',                      // White button text
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    textAlign: 'center',                // Center horizontally
  },
  plot: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent white background
    borderRadius: 10,                   // Rounder corners
    marginTop: 40,                      // Margin at the top
    padding: 10,                        // Padding for content inside
  },

});
