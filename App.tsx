import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>What's the weather today</Text>
        <Text style={styles.temp}>6</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.feels}>Feels like 5</Text>
          <Text style={styles.highLow}>High: 8 Low: 6</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text>It's sunny</Text>
          <Text>It's perfect t-shirt weather</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 20,
    color: 'black',
  },
  highLow: {
    fontSize: 20,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  bodyWrapper: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'flex-end',
  },
});

export default App;
