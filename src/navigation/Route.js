import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   AppRegistry,
   TouchableOpacity
} from 'react-native'

import HomePage from '../scene/HomePage'
import AboutPage from '../scene/AboutPage'
import MovieDetail from '../scene/MovieDetail'

export default class Router extends Component {
   constructor(){
      super()
   }
   render() {
      return (
         <Navigator
            initialRoute = {{ name: 'Home', title: 'Home' }}
            renderScene = { this.renderScene }
            // navigationBar = {
            //    <Navigator.NavigationBar
            //       style = { styles.navigationBar }
            //       routeMapper = { NavigationBarRouteMapper } />
            // }
         />
      );
   }
   renderScene(route, navigator) {

      if(route.name == 'Home') {
         return (
            <HomePage
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
      if(route.name == 'About') {
         return (
            <AboutPage
               navigator = {navigator}
             {...route.passProps}
            />
         )
      }

      if(route.name == 'Detail') {
         return (
            <MovieDetail
               navigator = {navigator}
               // Pass movie object passed with route down as a prop
               movie={route.movie}
               // Pass navigationOperations as navigator prop
              {...route.passProps}
            />
         )
      }
   }
}

// var NavigationBarRouteMapper = {
//    LeftButton(route, navigator, index, navState) {
//       if(index > 0) {
//          return (
//             <TouchableOpacity
//                onPress = {() => { if (index > 0) { navigator.pop() } }}>
//                <Text style={ styles.leftButton }>
//                   Back
//                </Text>
//             </TouchableOpacity>
//          )
//       }
//       else { return null }
//    },
//    RightButton(route, navigator, index, navState) {
//       if (route.openMenu) return (
//          <TouchableOpacity
//             onPress = { () => route.openMenu() }>
//             <Text style = { styles.rightButton }>
//                { route.rightText || 'Menu' }
//             </Text>
//          </TouchableOpacity>
//       )
//    },
//    Title(route, navigator, index, navState) {
//       return (
//          <Text style = { styles.title }>
//             {route.title}
//          </Text>
//       )
//    }
// };

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'blue',
   },
   leftButton: {
      color: '#ffffff',
      margin: 10,
      fontSize: 17,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      justifyContent: 'center',
      fontSize: 18
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   }
})
AppRegistry.registerComponent('Route', () => Route );
