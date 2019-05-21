import React from "react";
import { CheckBox } from "react-native-elements";
import {
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image
} from "react-native";

export default class SuccessScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backArrow}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const landingData = navigation.getParam("landingData", "NO-ID");
    const dateData = navigation.getParam("dateData", "NO-ID");
    const dateDataA = JSON.stringify(dateData);
    const activityData = navigation.getParam("activityData", "NO-ID");

    return (
      <ImageBackground
        source={require("../assets/background_image.png")}
        style={styles.backgroundContainer}
      >
        <StatusBar hidden={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={{ flex: 0.1 }} />
          <View style={styles.contentViewWrapper}>
            <Text style={styles.headline}>{"Goals"}</Text>
            {landingData.length !== 0 ? (
              landingData.map(item => <Text style={styles.text}> {item} </Text>)
            ) : (
              <Text style={styles.text}> {"Please select your goals"} </Text>
            )}

            <Text style={styles.headline}>{"Estimated Date"}</Text>
            <Text style={styles.text}>
              {dateDataA.slice(1, dateDataA.length - 1)}
            </Text>

            <Text style={styles.headline}>{"Activity"}</Text>
            <Text style={styles.text}>{activityData}</Text>
          </View>

          <View style={styles.bottom}>
            <View style={styles.buttonView}>
              <TouchableOpacity>
                <Text style={styles.button}>{"Submit"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  contentViewWrapper: {
    flex: 0.8,
    backgroundColor: "#fff",
    opacity: 0.9,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  headline: {
    fontSize: 18,
    textAlign: "center",
    color: "#696969",
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: "bold"
  },
  text: {
    fontSize: 14,
    color: "#696969",
    paddingTop: 2,
    paddingBottom: 2
  },
  bottom: {
    justifyContent: "flex-end",
    flex: 0.1,
    backgroundColor: "#40E0D0"
  },
  buttonView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  button: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
