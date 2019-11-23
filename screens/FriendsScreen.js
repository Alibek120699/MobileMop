import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import Friend from "../components/Friend";
import { removeFriend } from "../actions/ActionCreators";
 
const mapStateToProps = (state) => {
  const { friends } = state;
  return { friends };
}

const mapDispatchToProps = {
  removeFriend
}

class FriendsScreen extends React.Component {
  render(){
    console.log(this.props.friends);
    return (
      <View style={styles.container}>
        {
          this.props.friends.length>0 && this.props.friends.map(f => 
            <View key={f.id}>
              <Friend
                username={f.username}
                id={f.id}
                remove={() => this.props.removeFriend(f)} />
              <Button
                title="Go to Profile"
                onPress={ 
                  () => {
                    this.props.navigation.navigate('Profile', {
                      userName: f.username,
                      ava: f.ava
                    });
                  } 
                }
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);