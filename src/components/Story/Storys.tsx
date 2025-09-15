import { posts }                                           from "../../data/posts"
import { Styles }                                          from "./styles/Storys.module"
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native"

export const Storys = ()=>{


    return(

        <View style={Styles.container}>


            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
             >

                {
                    posts.map(

                        (posts)=>(
                            <TouchableOpacity style={Styles.viewUser} key={posts.id}>

                                <View style={Styles.viewImage}>

                                    <Image 
                                        style={Styles.imageUser}
                                        source={{uri:(posts.imgPerfil)}}
                                    />

                                </View>

                                <Text style={Styles.nameUser}>{posts.name}</Text>
                                

                            </TouchableOpacity>
                        )
                    )

                }

              
            </ScrollView>


        </View>
        
    )
}