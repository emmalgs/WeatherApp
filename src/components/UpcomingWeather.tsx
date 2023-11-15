import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

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
const Item = props => {
  const {dt_txt, min, max, condition} = props;
  return (
    <View>
      <Image
        source={require('../../assets/images/sunny.gif')}
        style={styles.icon}
      />
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
};
const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <Item
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  icon: {
    height: 60,
    width: 60,
  },
});

export default UpcomingWeather;
