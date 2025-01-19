import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Result from './components/Result';

export default function App() {
    const [imc, setImc] = useState(null);
    const [category, setCategory] = useState('');

    const calculateIMC = (weight, height) => {
        const imcValue = (weight / (height * height)).toFixed(2);
        setImc(imcValue);

        if (imcValue < 18.5) setCategory('Abaixo do peso');
        else if (imcValue >= 18.5 && imcValue < 24.9)
            setCategory('Peso normal');
        else if (imcValue >= 25 && imcValue < 29.9) setCategory('Sobrepeso');
        else if (imcValue >= 30 && imcValue < 34.9)
            setCategory('Obesidade grau I');
        else if (imcValue >= 35 && imcValue < 39.9)
            setCategory('Obesidade grau II');
        else setCategory('Obesidade grau III');
    };

    return (
        <View style={styles.container}>
            <Header />
            <InputForm onCalculate={calculateIMC} />
            {imc && <Result imc={imc} category={category} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
