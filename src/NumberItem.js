import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const NumberItem = ({numbers, deletes}) => {
    return(
        numbers.map((number, i) => (
            <Pressable
                key={i}
                onPress={() => {deletes(i)}}
            >
                <View 
                >
                    <Text style={css.number}>{number}</Text>
                </View>
            </Pressable>
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