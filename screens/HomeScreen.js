import React from "react";
import {
  ScrollView,
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { connect } from "react-redux";
import { removeTrack } from "../actions/ActionCreators";

const mapStateToProps = (state) => {
  const { tracks } = state;
  return { tracks };
}

const mapDispatchToProps = { 
  removeTrack
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
              <Button title="-"
                onPress={() => this.props.removeTrack(t)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
