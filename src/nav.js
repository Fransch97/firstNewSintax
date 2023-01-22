import React from "react";
import { View, Text } from "react-native";

const Nav = ({name}) =>{
    return (
        <View>
            <Text>Hello Navi</Text>
            <Text>{name}</Text>
        </View>
    ) 
}

export default Nav;