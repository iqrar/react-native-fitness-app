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
  Text
} from "react-native";

export default class Landing extends React.Component {
  state = {
    pregnancy: false,
    weight: false,
    birth: false,
    relax: false
  };
  pregnancyChange = () => {
    this.setState(prevState => ({
      pregnancy: !prevState.pregnancy
    }));
  };
  weightChange = () => {
    this.setState(prevState => ({
      weight: !prevState.weight
    }));
  };
  birthChange = () => {
    this.setState(prevState => ({
      birth: !prevState.birth
    }));
  };
  relaxChange = () => {
    this.setState(prevState => ({
      relax: !prevState.relax
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    let dataArray = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        if (key === "pregnancy") {
          dataArray.push("Find workouts for my pregnancy");
        }
        if (key === "weight") {
          dataArray.push("Not to gain unnecessary weight");
        }
        if (key === "birth") {
          dataArray.push("Prepare for birth");
        }
        if (key === "relax") {
          dataArray.push("Feel more relaxed");
        }
      }
    }
    const data = dataArray;
    this.props.navigation.navigate("Date", {
      landingData: data
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/background_image.png")}
        style={styles.backgroundContainer}
      >
        <StatusBar hidden={true} barStyle="light-content" />
        <View style={styles.container}>
          <View style={{ flex: 0.3 }} />
          <View style={styles.ScrollViewWrapper}>
            <ScrollView style={styles.contentContainer}>
              <Text style={styles.headline}>{"What are your goals?"}</Text>
              <Text style={styles.text}>
                {"Help us tailor our program to your needs"}
              </Text>
              <CheckBox
                title="Find workouts for my pregnancy"
                checked={this.state.pregnancy}
                checkedColor="#40E0D0"
                size={40}
                uncheckedColor="#40E0D0"
                textStyle={{ color: "#696969" }}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
                onPress={this.pregnancyChange.bind(this)}
              />
              <CheckBox
                title="Not to gain unnecessary weight"
                checked={this.state.weight}
                checkedColor="#40E0D0"
                textStyle={{ color: "#696969" }}
                size={40}
                uncheckedColor="#40E0D0"
                containerStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
                onPress={this.weightChange.bind(this)}
              />
              <CheckBox
                title="Prepare for birth"
                checked={this.state.birth}
                checkedColor="#40E0D0"
                textStyle={{ color: "#696969" }}
                size={40}
                uncheckedColor="#40E0D0"
                containerStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
                onPress={this.birthChange.bind(this)}
              />
              <CheckBox
                title="Find more relax"
                checked={this.state.relax}
                checkedColor="#40E0D0"
                textStyle={{ color: "#696969" }}
                size={40}
                uncheckedColor="#40E0D0"
                containerStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
                onPress={this.relaxChange.bind(this)}
              />
            </ScrollView>
          </View>
          <View style={styles.bottom}>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.onSubmit}>
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
  ScrollViewWrapper: {
    flex: 0.6,
    backgroundColor: "#fff",
    opacity: 0.8
  },
  headline: {
    fontSize: 22,
    textAlign: "center",
    color: "#696969"
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#696969"
  },
  contentContainer: {
    paddingVertical: 20
  },
  bottom: {
    justifyContent: "flex-end",
    flex: 0.1,
    backgroundColor: "#DCDCDC"
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
