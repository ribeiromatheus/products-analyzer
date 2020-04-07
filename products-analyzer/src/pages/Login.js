import React, { useState, useEffect } from 'react';
import { View, Image, AsyncStorage, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user)
                navigation.navigate('Main');
        });
    }, []);

    async function handleSubmit() {
        const response = await api.post('/session', { email, password });

        const { _id } = response.data;

        AsyncStorage.setItem('user', _id);
        AsyncStorage.setItem('password', password);

        navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>SUA SENHA *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#4caf50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});