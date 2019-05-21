import React from "react";
import { CheckBox } from "react-native-elements";
import { HeaderBackButton } from "react-navigation";
import {
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
  View,
  Text,
  Slider,
  Image
} from "react-native";

export default class ActivityLevelEntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      key: "I do not excercise"
    };
  }

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

  change(value) {
    this.setState(() => {
      return {
        value: parseInt(value)
      };
    });

    if (value === 1) {
      this.setState({ key: "I do not excercise" });
    }

    if (value === 2) {
      this.setState({ key: "I rarely excercise" });
    }

    if (value === 3) {
      this.setState({ key: "I sometimes excercise" });
    }

    if (value === 4) {
      this.setState({ key: "I regularly excercise" });
    }

    if (value === 5) {
      this.setState({ date: "I often excercise" });
    }
  }

  onSubmit = () => {
    const val = this.state.value;
    const des = this.state.key;
    this.props.navigation.navigate("Success", {
      itemId2: val,
      itemId1: des
    });
  };

  render() {
    const { navigation } = this.props;
    const dateData = navigation.getParam("dateData", "NO-ID");
    const landingData = navigation.getParam("landingData", "NO-ID");
    const itemAr = JSON.stringify(dateData);
    const { value } = this.state;

    return (
      <ImageBackground
        source={require("../assets/clouds.png")}
        style={styles.backgroundContainer}
      >
        <StatusBar hidden={true} barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.headerText}>
            {" "}
            {"To get your perfect workouts, tell us your activity level"}{" "}
          </Text>

          <View style={styles.sliderWrapper}>
            <Slider
              style={styles.slider}
              step={1}
              maximumValue={5}
              minimumValue={1}
              minimumTrackTintColor="#e6fff2"
              onValueChange={this.change.bind(this)}
              value={this.state.value}
              thumbImage={require("../assets/slider.png")}
              maximumTrackTintColor="#40E0D0"
            />
          </View>
          <Text style={styles.activityText}> {this.state.key} </Text>
        </View>

        <View style={styles.bottom}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Success", {
                  dateData: dateData,
                  landingData: landingData,
                  activityData: this.state.key
                });
              }}
            >
              <Text style={styles.button}>{"Continue"}</Text>
            </TouchableOpacity>
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
    flex: 0.9,
    alignItems: "center"
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  sliderWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  },
  slider: {
    width: 200,
    height: 40,
    marginRight: -100,
    marginLeft: -100,
    transform: [{ rotateZ: "-90deg" }]
  },
  headline: {
    fontSize: 22,
    textAlign: "center",
    color: "#696969"
  },
  headerText: {
    fontSize: 14,
    color: "#696969",
    paddingTop: 60,
    alignItems: "center",
    flexDirection: "column"
  },
  activityText: {
    fontSize: 14,
    color: "#696969",
    marginBottom: 10
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
