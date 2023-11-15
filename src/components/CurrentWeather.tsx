import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/sunny.gif')}
          style={styles.icons}
        />
        <Text>What's the weather today</Text>
        <Text style={styles.temp}>6</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.feels}>Feels like 5</Text>
          <Text style={styles.highLow}>High: 8 Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 40,
    color: 'black',
  },
  highLow: {
    fontSize: 30,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'column',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 20,
    color: 'black',
  },
  message: {
    fontSize: 30,
  },
  icons: {
    width: 100,
    height: 100,
  },
});

export default CurrentWeather;
