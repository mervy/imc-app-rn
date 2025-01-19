import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  Button from './Button';
import Input from './Input'

export default function InputForm( { onCalculate }) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleCalculate = () => {
        numericWeight = parseFloat(weight);
        numericHeight = parseFloat(height);

        if (!numericWeight || !numericHeight) {
            alert('Formato de número inválido!');
            return;
        }

        onCalculate(numericWeight, numericHeight);
    };

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Peso (kg):</Text>
            <Input
                value={weight}
                onChangeText={setWeight}
                placeholder="Ex: 65"
            />

            <Text style={styles.label}>Altura (cm)</Text>
            <Input
                value={height}
                onChangeText={setHeight}
                placeholder="Ex: 1.60"
            />

            <Button title="Calcular" onPress={handleCalculate} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginVertical: 20,
        weight: 700,
        width: '100%',

    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
});
