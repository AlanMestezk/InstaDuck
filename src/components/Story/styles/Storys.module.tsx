
import { StyleSheet, View } from "react-native";

export const Styles = StyleSheet.create(
    {
        container:{
            marginTop: 50,
            height:150
        },
        viewUser:{
            width: 100,
            height: 130,
            padding: 12,
            margin: 12,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        viewImage:{
            width: 90,
            height: 130,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20

        },
        imageUser:{
            width: 100,
            height: 100,
            borderRadius: 100,
            borderWidth: 2.8,
            borderColor: 'orangered'

        },
        nameUser:{
            color: 'aliceblue',
            fontSize: 15
        }
    }
)