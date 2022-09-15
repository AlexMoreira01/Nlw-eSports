import React from 'react';
import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    // Passando todas as informações que o Props oferece para o View
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>
            {title}
        </Text>

        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  );
}