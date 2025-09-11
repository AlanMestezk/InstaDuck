import { posts }                                          from '../data/posts'
import { Header }                                         from '../components/Header/Header'
import { styles }                                         from './AppScreen.module'
import { useState }                                       from "react"
import { View, Text, Image, TouchableOpacity,  FlatList } from "react-native"
import { Storys }                                         from '../components/Story/Storys'
import { ListContent }                                    from '../components/ListContent/ListContent'

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

            <View>

                <Header 
                    sendIcon={sendDuck}
                    titleIcon={logoIcon}
                />
                
            </View>

            <View>

                <Storys />

            </View>
            
            <View style={styles.containerFlatList}>

                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    data={feed}
                    keyExtractor={(item)=> item.id}
                    renderItem={
                        ({item})=> <ListContent data={item}/>
                    }
                />

            </View>


        </View>
    )
}