import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from './actions/place';
import { onAnchorsDidUpdate } from 'expo/build/AR';

class Home extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
}

placeNameChangeHandler = (value) => {
  this.setState({
    placeName: value
  });    
}

placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
          placeName={ info.item.value }
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Enter text"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'Add' 
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  placeInput: {
    width: '70%',
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
    marginTop: 15
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)