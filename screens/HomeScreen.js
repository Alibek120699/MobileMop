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

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        {/* <Button
        title="Go To Player Page"
        onPress={() => this.props.navigation.navigate('Links')} /> */}
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