import React from "react";
import { Image } from "react-native";

import { ProfilePictureProps } from "./types";

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => {
    const style = { width: size, height: size, borderRadius: size };
    return (
        <Image
            source={{ uri: image }}
            style={style}
        />
    )
}

export default ProfilePicture;