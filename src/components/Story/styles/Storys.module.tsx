
import { StyleSheet, View } from "react-native";

export const Styles = StyleSheet.create(
    {
        container:{
            marginTop: 50,
            height:133
        },
        viewUser:{
            width: 100,
            height: 140,
            padding: 12,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 8,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        viewImage:{
            width: 90,
            height: 140,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20

        },
        imageUser:{
            width: 104,
            height: 104,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: 'orangered'

        },
        nameUser:{
            color: 'aliceblue',
            fontSize: 15,
            fontWeight: 'bold'
        }
    }
)