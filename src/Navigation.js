/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {SafeAreaView, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './containers/HomeContainer';
import DetailView from './containers/DetailViewContainer';

// const Navigation = StackNavigator(
//   {
//     Home: { screen: Home },
//     DetailView: { screen: DetailView },
//   },
//   {
//     initialRouteName: 'Home',
//     headerMode: 'screen',
//   }
// )

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    DetailView: {screen: DetailView},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  },
  //   });
);

export default createAppContainer(AppNavigator);
