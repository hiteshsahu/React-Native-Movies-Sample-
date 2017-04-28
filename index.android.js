import Route from './src/navigation/Route'
import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'


class ReactMovies extends Component {
   render() {
      return (
         <Route />
      )
   }
}

AppRegistry.registerComponent('ReactMovies', () => ReactMovies)
