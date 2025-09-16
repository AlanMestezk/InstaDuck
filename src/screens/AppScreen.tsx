import { posts } from '../data/posts'
import { styles } from './AppScreen.module'
import { useMemo, useState } from "react"
import { View, FlatList, ScrollView } from "react-native"
import { ListContent } from '../components/ListContent/ListContent'
import { Header } from '../components/Header/Header'

const logoIcon = require('../assets/LogoInstaDuck.png')
const sendDuck = require('../assets/InstaDuckIcon.png')

interface AppScreenProps {
    id         : string
    name       : string
    likers     : number
    likeada    : boolean
    coments    : number
    toShare    : number
    imgPost    : string
    sendPost   : number
    imgPerfil  : string
    description: string
}

export const AppScreen = () => {

    const [feed, setFeed] = useState<AppScreenProps[]>(posts)

    const shuffledFeed = useMemo(
        () => [...feed].sort(() => Math.random() - 0.5),
        [feed]
    );

    return (

        
            <View style={styles.container}>

                


                {/* FlatList ajustada para ocupar apenas o espaço restante */}
                <FlatList 
                    data={shuffledFeed}

                    ListHeaderComponent={
                        <>
                            <Header 
                                sendIcon={sendDuck}
                                titleIcon={logoIcon}
                            />
                        </>
                    }

                    keyExtractor={(item) => item.id}

                    renderItem={
                        ({ item }) => <ListContent data={item} />
                    }
                    
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    style={{ flexGrow: 0 }} // evita que ocupe espaço extra indesejado
                    
                />

            </View>
        
    )
}

