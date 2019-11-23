import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";

export default function Friend(props){
    const {
        username,
    } = props;
    console.log(props.remove);
    return (
        <View style={styles.friendStyle}>
            <Text style={styles.userStyle}>{username}</Text>
            <View style={styles.btnStyle}>
                <Button
                    color='steelblue' 
                    title="X"
                    onPress={() => props.remove()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    friendStyle: {
        backgroundColor: "aqua",
        display: 'flex',
        flexDirection: 'row',
    },
    btnStyle: {
        marginStart: 'auto',
    },
    userStyle: {
        fontSize: 25,
    }
})
