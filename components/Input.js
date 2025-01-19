import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ value, onChangeText, placeholder }) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
        />
    );
}

const styles = StyleSheet.create({
    input: {
       borderWidth: 1,
       borderColor: '#ccc',
       borderRadius: 5,
        padding: 10,
        marginBottom: 15,
       alignItems: 'center',
        justifyContent: 'center',
    },
});

