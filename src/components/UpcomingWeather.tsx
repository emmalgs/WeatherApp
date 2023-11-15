import React from 'react';
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';

const DATA = [
  {
    dt_txt: '2020-02-02 12:00:00',
    main: {
      temp: 5,
      temp_min: 5,
      temp_max: 5,
      feels_like: 5,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2020-02-02 15:00:00',
    main: {
      temp: 5,
      temp_min: 5,
      temp_max: 5,
      feels_like: 5,
    },
    weather: [
      {
        main: 'Sunny',
      },
    ],
  },
  {
    dt_txt: '2020-02-02 18:00:00',
    main: {
      temp: 5,
      temp_min: 5,
      temp_max: 5,
      feels_like: 5,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={({item}) => <Text>{item.key}</Text>} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default UpcomingWeather;
