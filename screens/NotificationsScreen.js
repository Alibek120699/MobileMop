import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default class NotificationsScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Notifications</Text>
        <Button
        title="Go To Player Page"
        onPress={() => console.log("is read")} />
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