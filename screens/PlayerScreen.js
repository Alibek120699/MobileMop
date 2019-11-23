import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import {
  loadTracks,
  addTrack
} from "../actions/ActionCreators";

const mapStateToProps = state => {
  const {tracks} = state;
  return {tracks};
}

const mapDispatchToProps = {
  loadTracks, addTrack
}

function PlayerScreen(props) {

  props.loadTracks();

  return (
    <ScrollView style={styles.container}>
      <Text>PlayerScreen</Text>
      {
        props.tracks.length>0 && props.tracks.map(t => 
          <View key={t.id}>
            <Text>{t.title}</Text>
            <Text>{t.artist}</Text>
            <Button 
              title="add"
              onPress={() => addTrack(t)} />
          </View>
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4422ee'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
