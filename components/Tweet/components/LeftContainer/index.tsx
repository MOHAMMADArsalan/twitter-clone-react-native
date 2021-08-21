import React from "react";
import {View} from "react-native";

import { ProfilePicture  } from "../../../index"
import { LeftContainerProps } from "./types";

const LeftContainer = ({user}: LeftContainerProps) => {
    return <ProfilePicture image={user.image} size={50}/>
}

export default LeftContainer;