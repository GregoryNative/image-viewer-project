// @flow
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

import Colors from '../../constants/Colors';

import styles from './styles';

export default function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.spinner} size="large" />
    </View>
  );
}
