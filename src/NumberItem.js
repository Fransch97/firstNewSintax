import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NumberItem = ({numbers}) => {
    return(
        numbers.map((number) => (
            <View>
                <Text style={css.number}>{number}</Text>
            </View>
        ))
    )
}

const css = StyleSheet.create({
    number:{
        backgroundColor: "black",
        padding: 20,
        textAlign: "center",
        margin: 10,
        color: "white"
    }
})
export default NumberItem