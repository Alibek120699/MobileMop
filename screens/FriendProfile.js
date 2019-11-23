import React from "react";
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
} from "react-native";

export default class FriendProfile extends React.Component {
    render(){
        const {navigation} = this.props;
        const userName = navigation.getParam('userName', 'No Name');
        const ava = navigation.getParam('ava', 'No Ava');

        return (
            <View style={styles.container}>
                <Image source={{uri: ava}} style={styles.ava} />
                <Text>{userName}</Text>
                <Button 
                    title="Back"
                    onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cafaee",
        flex: 1
    },
    ava: {
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: "auto"
    }
})