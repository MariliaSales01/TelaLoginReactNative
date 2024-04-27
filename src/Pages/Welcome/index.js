import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image source={require('../../assets/logo.png')} style={styles.ImgLogo} 
                animation="flipInY"
                resizeMode="contain"/>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} >
                <Text style={styles.title}>Tela de Login</Text>
                <Text style={styles.text}>Lorem ipsum at eget dictumst mattis dolor aenean senectus, curabitur tempus purus eleifend posuere malesuada fermentum, aliquet fringilla ullamcorper cras tristique congue aliquam. </Text>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            </Animatable.View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0087F5'
    },
    ImgLogo:{
        width:"70%"
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#0087F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#0087F5',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }

})