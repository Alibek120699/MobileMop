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
import { connect } from "react-redux";
 
const mapStateToProps = (state) => {
  const { friends } = state;
  return { friends };
}

class FriendsScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {
          this.props.friends.map(f => 
            <View key={f.id}>
              <Text
                onPress={() => alert(f.id)}>{f.username}</Text>
              <Text>hgkjhgkjh</Text>
            </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4422ee'
  },
  friendsStyle: {
    flex: 2,
    backgroundColor: '#ffffff'
  }
});

export default connect(mapStateToProps)(FriendsScreen);