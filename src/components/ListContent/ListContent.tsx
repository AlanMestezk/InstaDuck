import { View, Text, Image, TouchableOpacity } from "react-native"
import { Styles }                              from "./styles/ListContent.module"

interface ListContentProps{

    data:{
        id         ?: string,
        name       ?: string | any,
        likers     ?: number
        likeada    ?: boolean,
        imgPost    ?: string
        imgPerfil  ?: string | any,
        description?: string,
    }
}

export const ListContent = ({data}: ListContentProps)=>{


    return(
        <View style={Styles.container}>

            <View style={Styles.viewPerfil}>

                <Text style={Styles.name}> {data.name} </Text>

                <Image 
                    source={{uri:(data.imgPerfil)}}
                    style={Styles.imgPerfil}
                />

            </View>

        </View>
    )
}