import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create(

    {
        container:{
            
            marginBottom: 10,
            
        },
        viewPerfil:{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 8
        },
        imgPerfil:{
            width: 50,
            height: 50,
            borderRadius: 100
        },
        name:{
            color:'aliceblue',
            fontWeight: '400'
        },
        viewPubli:{
            flex: 1,
            backgroundColor:'black',
            alignItems: 'center',
            justifyContent: 'center'
        },
        imagePubli:{
            flex: 1,
            width: 415,
            height: 400,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        viewButtons:{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 5
        },
        touchButons:{
            padding: 6,
            borderRadius: 100,
            margin: 4,
            textAlign: 'center',
            borderWidth: 0.3,
            borderColor: 'aliceblue'
        },
        imgButton:{
            width: 30,
            height: 30
        },
        textNumber:{
            color: 'aliceblue',
            marginRight: 10,
            fontWeight:'bold'
        },
        viewNameDescription: {
            flex: 1,
            padding: 10,
            marginTop: -4
        },
        nameText: {
            color: "aliceblue",
            fontWeight: "bold",
            fontSize: 15
        },
        descriptionText: {
            color: "white",
            fontWeight: 'heavy',
            fontSize: 13
        },
    }
)