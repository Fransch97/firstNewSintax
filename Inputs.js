import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Inputs = ({enterValues}) => {
    const [value, setText] = useState('Hello');
   
    return (
        <View>
            <TextInput
                onChangeText={(text) => {setText(text)}}
                value={value}
                style={css.input}
            />
    
            <Text 
                style={css.button}
                onPress={() => {enterValues(value)}}
            >Get Value</Text>
        </View>

    )
}

const css = StyleSheet.create({
    input: {
        backgroundColor: "lightgrey",
        margin:10,
        padding: 15,
    },
    button: {
        textAlign: "center",
        margin: 10,
        padding: 20,
        backgroundColor: "blue",
        fontWeight: "800",
        fontSize: 22
    },
})

export default Inputs