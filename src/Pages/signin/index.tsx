import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable'
import {useForm, Controller} from 'react-hook-form'

export default function SignIn(){
    
    type FormData = {
        email: string;
        senha: string;
    }
    
    const {control, handleSubmit, formState: {errors} } = useForm<FormData>();
    useEffect(() => console.log('Email errors:', errors?.email), [errors?.email])
    useEffect(() => console.log('Password errors:', errors?.senha), [errors?.senha])

    const onSubmit = (data: FormData) => console.log(data);

    return(
        <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>Email</Text>
            <Controller
                control={control}
                rules={{
                    required: "Email obrigatório",
                    pattern:{
                        message: "Email inválido",
                        value: /^\b[A-Z0-9._%-]+@[A-Z0-9-]+\.[A-Z]{2,4}\b$/i
                    }
                }}
                name="email"
                render={({field: {value, onChange}}) => (
                    <TextInput placeholder="Digite seu email" style={styles.input} value={value} onChangeText={onChange} autoCapitalize="none"/>
                )}
            />

            <Text style={styles.title}>Senha</Text>
            <Controller
                control={control}
                rules={{
                    required: "Senha obrigatória",
                    minLength: 8
                }}
                name="senha"
                render={({field: {value, onChange}}) => (
                    <TextInput placeholder="Digite sua senha" style={styles.input} value={value} onChangeText={onChange} secureTextEntry/>
                )}
            />
            

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonEsqueci}>
                <Text style={styles.esqueciText}>Esqueceu a senha?</Text>
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
    containerHeader:{
        marginTop: '30%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#0087F5',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonEsqueci:{
        marginTop: 14,
        alignSelf: 'center'
    },
    esqueciText:{
        color: '#a1a1a1'
    }

})