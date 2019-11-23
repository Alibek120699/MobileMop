import React from "react";
import {
  ScrollView,
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
import { 
  Ionicons,
  FontAwesome
} from '@expo/vector-icons';

const mapStateToProps = (state) => {
  const { tracks } = state;
  return { tracks };
}

class HomeScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text>Home Page</Text>
        {
          this.props.tracks.map((t) => 
            <View key={t.id} style={styles.trackstyle}>
              <Text>{t.title}</Text>
              <Button title="add"
                onPress={() => console.log(t.artist)} />
            </View>)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cafaee' 
  },
  trackstyle: {
    backgroundColor: '#fffcbb',
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '15%'
  }
});

export default connect(mapStateToProps)(HomeScreen);
