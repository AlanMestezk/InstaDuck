import { View, Text, Image, TouchableOpacity } from "react-native"
import { Styles }                              from "./styles/ListContent.module"
import { Style } from "../../../styles.module"

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
                <Image 
                    source={{uri:(data.imgPerfil)}}
                    style={Styles.imgPerfil}
                    resizeMode="cover"
                />

                <Text style={Styles.name}> {data.name} </Text>

            </View>

            <View style={Styles.viewPubli}>

                <Image 
                    source={{uri:(data.imgPost)}}
                    style={Styles.imagePubli}
                    resizeMode="contain"
                />

            </View>

            <View style={Styles.viewButtons}>

                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/duckDisable.png')}
                    />

                </TouchableOpacity>


                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/coment.png')}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/refresh.png')}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/sendDuck.png')}
                    />

                </TouchableOpacity>
            </View>

            <View style={Styles.viewNameDescription}>

                <Text style={Styles.descriptionText}>
                    <Text style={Styles.nameText}>{data.name} </Text>
                    {data.description}
                </Text>

            </View>

        </View>
    )
}