import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { 
  readNotification, 
  loadNotifications 
} from "../actions/ActionCreators";

const mapStateToProps = (state) => {
  const {notifications} = state;
  return {notifications};
}

const mapDispatchToProps = {
  loadNotifications,
  readNotification,
}

class NotificationsScreen extends React.Component {
  render(){
    console.log(this.props.notifications);
    return (
      <View style={styles.container}>
        <Text>Notifications</Text>
        {
          this.props.notifications.length>0 && this.props.notifications.map(n => 
            <View key={n.id}>
              <Text>{n.message}</Text>
              <Text>{n.isRead}</Text>
              <Button
               //onPress={() => alert(this.props.notifications[n.id-1].message)}
               onPress={() => this.props.readNotification(n)}
               title="Read" />
            </View>
          )
        }
      </View>
    );
  }

  componentDidMount(){
    this.props.loadNotifications();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cafaee'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);
