import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";

export default function Friend(props){
    const {
        id,
        username,
    } = props;
    console.log(props.remove);
    return (
        <View style={styles.friendStyle}>
            <Text>{username}</Text>
            <Text>{id}</Text>
            <Button title="-"
                onPress={() => props.remove()} />
        </View>
    );
}

const styles = StyleSheet.create({
    friendStyle: {
        margin: '2%',
        backgroundColor: "aqua",
    }
})
