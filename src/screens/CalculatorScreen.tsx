import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    buildNumber,
    clear,
    positiveNegative,
    del,
    sum,
    sub,
    mul,
    div,
    calculate,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        {previousNumber != '0' && (
          <Text style={styles.resultSmall}>{previousNumber}</Text>
        )}
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {number}
        </Text>
        <View style={styles.row}>
          <CustomButton text="C" color="#9b9b9b" action={clear} />
          <CustomButton text="+/-" color="#9b9b9b" action={positiveNegative} />
          <CustomButton text="del" color="#9b9b9b" action={del} />
          <CustomButton text="/" color="#ff9427" action={div} />
        </View>
        <View style={styles.row}>
          <CustomButton text="7" action={buildNumber} />
          <CustomButton text="8" action={buildNumber} />
          <CustomButton text="9" action={buildNumber} />
          <CustomButton text="X" color="#ff9427" action={mul} />
        </View>
        <View style={styles.row}>
          <CustomButton text="4" action={buildNumber} />
          <CustomButton text="5" action={buildNumber} />
          <CustomButton text="6" action={buildNumber} />
          <CustomButton text="-" color="#ff9427" action={sub} />
        </View>
        <View style={styles.row}>
          <CustomButton text="1" action={buildNumber} />
          <CustomButton text="2" action={buildNumber} />
          <CustomButton text="3" action={buildNumber} />
          <CustomButton text="+" color="#ff9427" action={sum} />
        </View>
        <View style={styles.row}>
          <CustomButton text="0" width action={buildNumber} />
          <CustomButton text="." action={buildNumber} />
          <CustomButton text="=" color="#ff9427" action={calculate} />
        </View>
      </View>
    </SafeAreaView>
  );
};
