import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface IProps {
  text: string;
  color?: string;
  width?: boolean;
  action: (char: string) => void;
}

export const CustomButton = ({
  text,
  color = '#2d2d2d',
  width = false,
  action,
}: IProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color == '#9b9b9b' ? '#000' : '#fff',
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
