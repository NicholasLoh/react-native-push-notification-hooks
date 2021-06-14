import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

export const SecondScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.root}>
        <Text style={styles.title}>This is the second page</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
