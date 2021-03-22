import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_395}>
        <Text style={styles.Text_1_395}>let’s sign you in</Text>
      </View>
      <View style={styles.View_1_719}>
        <View style={styles.View_1_720}>
          <Text style={styles.Text_1_720}>continue</Text>
        </View>
      </View>
      <View style={styles.View_1_397}>
        <View style={styles.View_1_398}>
          <Text style={styles.Text_1_398}>Mobile Number</Text>
        </View>
        <View style={styles.View_1_399}>
          <View style={styles.View_1_400}>
            <View style={styles.View_1_401}>
              <View style={styles.View_1_402}>
                <View style={styles.View_I1_402_83_81489}>
                  <View style={styles.View_I1_402_83_81489_7_16400}>
                    <View style={styles.View_I1_402_83_81489_7_16401} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/aeaa/f3e18e497331314494ad280167546587"
                      }}
                      style={styles.ImageBackground_I1_402_83_81489_7_16402}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffd6/045b/25e0089e08a4381933ba796fefd97c07"
                      }}
                      style={styles.ImageBackground_I1_402_83_81489_7_16403}
                    />
                    <View style={styles.View_I1_402_83_81489_7_16411} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/051b/33b7/374449b718adf9513c90b620a2ce9980"
                      }}
                      style={styles.ImageBackground_I1_402_83_81489_7_16412}
                    />
                  </View>
                </View>
                <View style={styles.View_I1_402_83_81490} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23da/edea/9cadb28fbd2e8c85cf23550a1b20d71f"
              }}
              style={styles.ImageBackground_1_716}
            />
          </View>
          <View style={styles.View_1_404}>
            <Text style={styles.Text_1_404}>000 - 000 - 0000</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_700}>
        <View style={styles.View_1_701} />
        <View style={styles.View_1_702} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa20/2277/288ff8f1410556baaa5fd213b4547d3c"
          }}
          style={styles.ImageBackground_1_703}
        />
        <View style={styles.View_1_708}>
          <View style={styles.View_1_709}>
            <Text style={styles.Text_1_709}>contact us</Text>
          </View>
          <View style={styles.View_1_710}>
            <Text style={styles.Text_1_710}>sign up / sign in</Text>
          </View>
          <View style={styles.View_1_711}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7969/7b30/381b770d36acdaa4617df197efd9dc47"
              }}
              style={styles.ImageBackground_1_712}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aa3/ff13/6e8b5a53add982e2e0a5a3d8bcf65dcf"
        }}
        style={styles.ImageBackground_1_406}
      />
      <View style={styles.View_1_409}>
        <Text style={styles.Text_1_409}>
          I instruct otoz to provide my information to an authorized otoz
          dealership. I understand that an authorized otoz dealership may
          contact me during the trip or if they need to reach me out for
          information.
        </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_395: {
    width: wp("31.041666666666668%"),
    minWidth: wp("31.041666666666668%"),
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.513888888888886%"),
    top: 392
  },
  Text_1_395: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_719: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.44444444444444%"),
    top: 640,
    backgroundColor: "rgba(0, 36, 156, 1)"
  },
  View_1_720: {
    width: wp("4.930555555555555%"),
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.090277777777779%")
  },
  Text_1_720: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_397: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.44444444444444%"),
    top: 472,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_398: {
    width: wp("31.11111111111111%"),
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_398: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_399: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 24,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_400: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: 12
  },
  View_1_401: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_402: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888573%"),
    top: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_402_83_81489: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_402_83_81489_7_16400: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_I1_402_83_81489_7_16401: {
    width: wp("1.3888888888888888%"),
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I1_402_83_81489_7_16402: {
    width: wp("1.3888888888888888%"),
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_I1_402_83_81489_7_16403: {
    width: wp("1.3888888888888888%"),
    height: 13.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1.25
  },
  View_I1_402_83_81489_7_16411: {
    width: wp("0.78125%"),
    height: 8.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(46, 66, 165, 1)"
  },
  ImageBackground_I1_402_83_81489_7_16412: {
    width: wp("0.6585739718543159%"),
    height: 7.011618137359619,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0649515787760393%"),
    top: 0.70562744140625
  },
  View_I1_402_83_81490: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_1_716: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%")
  },
  View_1_404: {
    width: wp("24.444444444444443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: 12
  },
  Text_1_404: {
    color: "rgba(191, 191, 191, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_700: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_701: {
    width: wp("100%"),
    height: 64,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_702: {
    width: wp("100%"),
    height: 1,
    top: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_1_703: {
    width: wp("4.933136834038629%"),
    height: 23.9999942779541,
    top: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%")
  },
  View_1_708: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 24,
    top: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_709: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_709: {
    color: "rgba(127, 127, 127, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_710: {
    width: wp("7.708333333333334%"),
    minWidth: wp("7.708333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.708333333333343%"),
    top: 0
  },
  Text_1_710: {
    color: "rgba(127, 127, 127, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_711: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.91666666666667%"),
    top: 0
  },
  ImageBackground_1_712: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_406: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 568,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.44444444444444%")
  },
  View_1_409: {
    width: wp("28.888888888888886%"),
    minWidth: wp("28.888888888888886%"),
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.666666666666664%"),
    top: 568
  },
  Text_1_409: {
    color: "rgba(127, 127, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1024 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
