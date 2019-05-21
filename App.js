import React from "react";
import { CheckBox } from "react-native-elements";
import {
  Button,
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import Landing from "./components/LandingScreen";
import DateEntryScreen from "./components/DateEntryScreen";
import ActivityLevelEntryScreen from "./components/ActivityLevelEntryScreen";
import SuccessScreen from "./components/SuccessScreen";

const RootStack = createStackNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
    Date: {
      screen: DateEntryScreen,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
    Activity: {
      screen: ActivityLevelEntryScreen,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    },
    Success: {
      screen: SuccessScreen,
      navigationOptions: {
        headerTransparent: true,
        headerBackground: Platform.select({
          ios: <View style={{ flex: 1 }} intensity={98} />,
          android: (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          )
        })
      }
    }
  },
  {
    initialRouteName: "Landing"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}
