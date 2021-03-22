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
      <View style={styles.View_1_411}>
        <Text style={styles.Text_1_411}>your order details</Text>
      </View>
      <View style={styles.View_1_412}>
        <View style={styles.View_1_413} />
        <View style={styles.View_1_414}>
          <Text style={styles.Text_1_414}>monthly payment</Text>
        </View>
        <View style={styles.View_1_415}>
          <Text style={styles.Text_1_415}>
            This is an estimate only and excludes final tax, license, title,
            registration, and other fees that may be added by the dealer. This
            also does not include vehicle insurance. You will need to provide
            your own insurance later to qualify for a MINI vehicle.
          </Text>
        </View>
        <View style={styles.View_1_416}>
          <Text style={styles.Text_1_416}>monthly payment</Text>
        </View>
        <View style={styles.View_1_417}>
          <Text style={styles.Text_1_417}>$500 / mo.</Text>
        </View>
      </View>
      <View style={styles.View_1_418} />
      <View style={styles.View_1_419}>
        <View style={styles.View_1_420}>
          <Text style={styles.Text_1_420}>annual vehicle mileage</Text>
        </View>
        <View style={styles.View_1_421}>
          <Text style={styles.Text_1_421}>12,000</Text>
        </View>
      </View>
      <View style={styles.View_1_422} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_411: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.084745762711865%"),
    top: 24
  },
  Text_1_411: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_412: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.084745762711865%"),
    top: 88
  },
  View_1_413: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 48,
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_414: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_415: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 112
  },
  Text_1_415: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_416: {
    width: wp("24.78813559322034%"),
    minWidth: wp("24.78813559322034%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3898305084745743%"),
    top: 64
  },
  Text_1_416: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_417: {
    width: wp("15.889830508474576%"),
    minWidth: wp("15.889830508474576%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55084745762711%"),
    top: 64
  },
  Text_1_417: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_418: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.084745762711865%"),
    top: 288,
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_419: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.084745762711865%"),
    top: 313
  },
  View_1_420: {
    width: wp("43.00847457627119%"),
    minWidth: wp("43.00847457627119%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_421: {
    width: wp("12.923728813559322%"),
    minWidth: wp("12.923728813559322%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.90677966101696%"),
    top: 0
  },
  Text_1_421: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_422: {
    width: wp("89.83050847457628%"),
    minWidth: wp("89.83050847457628%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.084745762711865%"),
    top: 361,
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2: { height: 386 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
