import { Style }             from "./styles/Header.module"
import { View, Text, Image, TouchableOpacity } from "react-native"

interface HeaderProps{
    titleIcon: string | undefined | any
    sendIcon: string | undefined | any
}

export const Header= ({titleIcon, sendIcon}:HeaderProps )=>{

    return(
        <View style={Style.header}>
            
            <TouchableOpacity>

                <Image
                    source={titleIcon}
                    style={Style.logoIcon}
                />

            </TouchableOpacity>

            <TouchableOpacity>
                
                <Image
                    source={sendIcon}
                    style={Style.sendIcon}
                />

            </TouchableOpacity>



        </View>
    )
}