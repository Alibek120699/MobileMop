import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

export default class FriendsScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button
        title="Show Playlist"
        onPress={() => console.log("show playlist") } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4422ee'
  }
});