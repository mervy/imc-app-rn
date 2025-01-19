import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>IMC Calculator</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#6200ee',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 800,
        borderRadius: 10,
    },
});
