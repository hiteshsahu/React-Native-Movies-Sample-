import React, { Component } from 'react';
import MovieRow from './MovieRow';
import { AppRegistry, ListView, StyleSheet,Text, View } from 'react-native';

var movieList = require('../mock/movies.json');

export default class MovieList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(movieList)
    };
  }

  render() {
    return (

      <View style={{flex: 1, paddingTop: 22}}>
        <ListView contentContainerStyle={styles.list}
           dataSource={this.state.dataSource}
           renderRow={(rowData) => <MovieRow
           title = {rowData.title}
           thumb = {rowData.cover}
           year = {rowData.year}
           synopsis = {rowData.synopsis}
            ></MovieRow>}
        />
      </View>
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
   list: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     flexWrap: 'wrap',
     paddingHorizontal: 3,
   },

});
