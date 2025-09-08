import { Header } from '../components/Header/Header'
import { posts }                                          from '../data/posts'
import { styles }                                         from './AppScreen.module'
import { useState }                                       from "react"
import { View, Text, Image, TouchableOpacity,  FlatList } from "react-native"

const logoIcon = require ('../assets/LogoInstaDuck.png')
const sendDuck = require ('../assets/InstaDuckIcon.png')

interface AppScreenProps{

    id         : string,
    name       : string,
    likers     : number
    likeada    : boolean,
    imgPost    : string
    imgPerfil  : string,
    description: string,
}

export const AppScreen = ()=>{

    const [feed, setFeed] = useState<AppScreenProps[]>(posts)

    return(
        <View style={styles.container}>
            
            <Header 
                sendIcon={sendDuck}
                titleIcon={logoIcon}
            />

        </View>
    )
}