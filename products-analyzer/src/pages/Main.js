import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import api from '../services/api';

export default function Main() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        async function getPermissionAsync() {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }

        getPermissionAsync();
    }, []);

    async function takePicture() {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!result.cancelled)
            setPreview(result.uri);
        else
            return;

        let localUri = result.uri;
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        const image = {
            uri: localUri,
            name: filename,
            type
        };

        setImage(image);
    }

    async function handleSubmit() {
        const data = new FormData();
        const user_id = await AsyncStorage.getItem('user');

        data.append('file', image);

        await api.post('/recognize', data, {
            headers: { user_id }
        });
    }

    return (
        <View style={styles.container}>
            {preview && <Image source={{ uri: preview }} style={{ width: 200, height: 200 }} />}

            <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Text style={styles.buttonText}>Tirar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Analyze</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        height: 42,
        backgroundColor: '#4caf50',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        borderRadius: 2
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});