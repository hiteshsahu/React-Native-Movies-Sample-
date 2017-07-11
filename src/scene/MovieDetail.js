import Style from '../Style';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,TextInput,Image,Alert,ToastAndroid,
  Navigator,Modal,
  DrawerLayoutAndroid,TouchableHighlight,
  ToolbarAndroid,ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

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
   this.showConfirmationDialog = this.showConfirmationDialog.bind(this);
 }

 openDrawer() {
    this.drawer.openDrawer();
}

showConfirmationDialog(){
  Alert.alert(
'Confirm Ticket',
'Would you like to buy ticket for this movie',
[
  {text: 'Yes', onPress: () => {ToastAndroid.showWithGravity('Ticket Booked :D',ToastAndroid.SHORT, ToastAndroid.CENTER);}},
  {text: 'No', onPress: () => {ToastAndroid.show('Ticket cancel :(', ToastAndroid.SHORT);},},
  {text: 'Cancel', onPress: () =>console.log('Cancelled'), style: 'cancel'},
],
{ cancelable: false }
)
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
  <ScrollView>
      <View style={Style.containerDetail}>
       {/* Background image with large image */}
       <Image source={{uri: cover}} style={Style.imageBackground}>
         {/* Use ScrollView in case plot is too large to fit on the screen */}
         <ScrollView
           style={Style.plot}
         >

            <Text style={Style.welcome}>
             Movie Detail
           </Text>
            <Text  style={Style.title} >{title}{"\n"}</Text>
            <Text  style={Style.year}>Year - {year}</Text>
            <Text  style={Style.content}>{synopsis}</Text>

            {/* Button container */}
         <View style={Style.buttonContainer}>
           {/* Press handler */}
           <TouchableOpacity
             // Buy Ticket
             onPress= { this.showConfirmationDialog}
             // Dim button a little bit when pressed
             activeOpacity={0.7}
             // Pass button style
             style={Style.buttonClose}
           >
             <Text style={Style.buttonText}>Buy Ticket</Text>
           </TouchableOpacity>
         </View>

     </ScrollView>

       </Image>
     </View>


            </ScrollView>
            </View>
  </DrawerLayoutAndroid>

    );
  }
}

AppRegistry.registerComponent('MovieDetail', () => MovieDetail);
