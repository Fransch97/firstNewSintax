import React, {useState, useEffekt} from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Generate = ({passFunc}) =>(
    <TouchableHighlight
        onPress={() => passFunc("text from generate button")}
        underlayColor="blue"
    >
        <View style={css.view}>
            <Text style={css.button}>add number</Text>
        </View>
    </TouchableHighlight>
)

const css = StyleSheet.create({
    view: {
        display: "flex",
        alignItems: "center"
    },
    button: {
        padding: 10,
        backgroundColor: "red",
        width: "25%",
        borderRadius: 20,
        textAlign: "center",
        fontWeight: "900",

    }
})

export default Generate;