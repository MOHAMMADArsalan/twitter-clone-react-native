import React from "react";
import {View} from "react-native";

import { Text } from "../Themed";
import { MainContainerProps } from "./types";

const MainContainer = (props: MainContainerProps) => {
    return <View>
        <Text>Hello World</Text>
    </View>
}

export default MainContainer;