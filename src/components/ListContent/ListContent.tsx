import { View, Text, Image, TouchableOpacity } from "react-native"
import { Styles }                              from "./styles/ListContent.module"
import { Style } from "../../../styles.module"
import { useState } from "react"
import { Header } from "../Header/Header"

const logoIcon = require('../../assets/LogoInstaDuck.png')
const sendDuck = require('../../assets/InstaDuckIcon.png')

interface ListContentProps{

    data:{
        id         ?: string
        name       ?: string 
        likers      : number
        likeada     : boolean
        imgPost    ?: string
        imgPerfil  ?: string
        description?: string
        coments    ?: number
        toShare    ?: number
        sendPost   ?: number
    }
}

export const ListContent = ({data}: ListContentProps)=>{

    const [likers,   setLikers] = useState<number>(data.likers)
    const [likeada, setLikeada] = useState<boolean>(data.likeada) 

    const handleLikes = ()=>{
        
        if(likeada ){

            setLikeada(false)
            setLikers(prev => prev -1)

        }
        else{

            setLikeada(true)
            setLikers(prev => prev +1)
        }
    }

    //mostrar os likes se for maior que 0
    const handleShowLikers = (likers: number)=>{


        return likers > 0 ? <Text style={Styles.textNumber}>{likers}</Text> : null

    }

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
                
                <TouchableOpacity 
                    style={Styles.touchButons}
                    onPress={handleLikes}
                >

                    <Image 
                        style={Styles.imgButton}
                        source={
                            likeada ? 
                             require('../../assets/duckEnable.png'): require('../../assets/duckDisable.png')
                        }
                        resizeMode="cover"
                    />

                </TouchableOpacity>

                
                {  //mostrar os likes se for maior que 0
                    handleShowLikers(likers)
                }

                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/coment.png')}
                    />

                </TouchableOpacity>

                <Text style={Styles.textNumber}>{data.coments}</Text>

                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/refresh.png')}
                    />

                </TouchableOpacity>

                <Text style={Styles.textNumber}>{data.toShare}</Text>

                <TouchableOpacity style={Styles.touchButons}>

                    <Image 
                        style={Styles.imgButton}
                        source={require('../../assets/sendDuck.png')}
                        resizeMode="cover"
                    />

                </TouchableOpacity>

                <Text style={Styles.textNumber}>{data.sendPost}</Text>


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