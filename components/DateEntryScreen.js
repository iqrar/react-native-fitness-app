import React from "react";
import { CheckBox } from "react-native-elements";
import DatePicker from "react-native-date-picker";
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

export default class DateEntryScreen extends React.Component {
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

  constructor() {
    super();
    this.state = { date: new Date(), landingData: [] };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate = (date, item) => {
    this.setState({ date: date });
  };

  render() {
    const { navigation } = this.props;
    const landingData = navigation.getParam("landingData", "NO-ID");
    const itemAr = JSON.stringify(landingData);
    return (
      <ImageBackground
        source={require("../assets/background_image.png")}
        style={styles.backgroundContainer}
      >
        <StatusBar hidden={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={{ flex: 0.6 }} />

          <View style={styles.pickerViewWrapper}>
            <Text style={styles.text}>{"Select your estimated due date"}</Text>
            <DatePicker
              date={this.state.date}
              onDateChange={date => this.onUpdate(date)}
            />
          </View>

          <View style={styles.bottom}>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Activity", {
                    dateData: this.state.date,
                    landingData: landingData
                  });
                }}
              >
                <Text style={styles.button}>{"Continue"}</Text>
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
  pickerViewWrapper: {
    flex: 0.3,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#696969"
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
