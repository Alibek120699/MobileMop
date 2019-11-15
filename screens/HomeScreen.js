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
  const { tracks } = state;
  return { tracks };
}

class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        {/* <Button
        title="Go To Player Page"
        onPress={() => console.log(this.props)} /> */}
        {
          this.props.tracks.map((t) => 
            <View key={t.id} style={styles.trackstyle}>
              <Text>{t.title}</Text>
              <Button title="add"
                onPress={() => console.log(t.artist)} />
            </View>)
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
  trackstyle: {
    backgroundColor: '#fffcbb',
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '15%'
  }
});

export default connect(mapStateToProps)(HomeScreen);
