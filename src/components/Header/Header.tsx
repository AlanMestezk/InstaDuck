import { Style }             from "./Header.module"
import { View, Text, Image } from "react-native"

interface HeaderProps{
    titleIcon: string | undefined | any
    sendIcon: string | undefined | any
}

export const Header= ({titleIcon, sendIcon}:HeaderProps )=>{

    return(
        <View style={Style.header}>
            
            <Image
                source={titleIcon}
                style={Style.logoIcon}
            />

            <Image
                source={sendIcon}
                style={Style.sendIcon}
            />

        </View>
    )
}