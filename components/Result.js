import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ imc, category }) {
    return (
        <View style={styles.result}>
            <Text style={styles.imcText}>Seu IMC: {imc}</Text>
           <Text style={styles.categoryText}>{category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        width: '100%',
        alignItems: 'center',
    },
    imcText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 800,
        color: '#000',
        marginBottom: 5,
    },
    categoryText: {       
        alignItems: 'center',
        verticalAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
});
