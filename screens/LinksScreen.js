import React from "react";
import {
  View,
  Text
} from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";

class LinksScreen extends React.Component {
  render(){
    return (
      <View>
        <Text>Search Page</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Links: LinksScreen
  },
  {
    initialRouteName: 'Home',
  }
);

