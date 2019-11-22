import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { Searchbar } from "react-native-paper"; 
import { 
  Ionicons,
  FontAwesome
} from '@expo/vector-icons';

const mapStateToProps = (state) => {
  const { tracks } = state;
  return { tracks };
}

class SearchScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchItem: '',
    }
    this.handleText = this.handleText.bind(this);
  }

  handleText = text => {
    this.setState({searchItem: text})
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <Searchbar style={styles.searchbar}
          placeholder="Search"
          onChangeText={text => this.handleText(text)}
          value={this.state.searchItem} />
        {
          this.props.tracks
            .filter(tr => tr.title.startsWith(this.state.searchItem))
            .map((t) => 
              <View key={t.id} style={styles.trackstyle}>
                <View style={styles.textview}>
                    <Text style={styles.text}>{t.title}</Text>
                    <Text style={styles.artistStyle}>{t.artist}</Text>
                </View>
                <Button style={styles.buttonStyle} title="+"
                  onPress={() => alert(t.artist)} />
              </View>)
        }   
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  textview: {
    display: 'flex',
    flex: 2,
    marginTop: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#cafaee' 
  }, 
  searchbar: {
    backgroundColor: "#f7f8f8"
  },
  artistStyle: {
    fontSize: 16,
    marginBottom: 0
  },
  text: {
    height: 50,
    fontSize: 20,
    marginTop: 0
  },
  trackstyle: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f7f7b0',
    margin: 15,
    marginBottom: 5,
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#000',
    marginEnd: 'auto',
    width: 30,
    height: 15,
    flex: 2
  }
});
export default connect(mapStateToProps)(SearchScreen);
