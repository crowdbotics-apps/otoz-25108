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
      <View style={styles.View_1_424} />
      <View style={styles.View_1_425} />
      <View style={styles.View_1_426} />
      <View style={styles.View_1_427} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa20/2277/288ff8f1410556baaa5fd213b4547d3c"
        }}
        style={styles.ImageBackground_1_428}
      />
      <View style={styles.View_1_433}>
        <View style={styles.View_1_434}>
          <View style={styles.View_1_435} />
          <View style={styles.View_1_436} />
          <View style={styles.View_1_437}>
            <Text style={styles.Text_1_437}>Lease</Text>
          </View>
          <View style={styles.View_1_438}>
            <Text style={styles.Text_1_438}>finance</Text>
          </View>
          <View style={styles.View_1_439}>
            <Text style={styles.Text_1_439}>cash</Text>
          </View>
        </View>
        <View style={styles.View_1_440} />
        <View style={styles.View_1_441}>
          <View style={styles.View_1_442}>
            <Text style={styles.Text_1_442}>body style</Text>
          </View>
          <View style={styles.View_1_443}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
              }}
              style={styles.ImageBackground_1_444}
            />
          </View>
        </View>
        <View style={styles.View_1_446} />
        <View style={styles.View_1_447}>
          <View style={styles.View_1_448}>
            <Text style={styles.Text_1_448}>make</Text>
          </View>
          <View style={styles.View_1_449}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
              }}
              style={styles.ImageBackground_1_450}
            />
          </View>
        </View>
        <View style={styles.View_1_452} />
        <View style={styles.View_1_453}>
          <View style={styles.View_1_454}>
            <Text style={styles.Text_1_454}>color</Text>
          </View>
          <View style={styles.View_1_455}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
              }}
              style={styles.ImageBackground_1_456}
            />
          </View>
        </View>
        <View style={styles.View_1_458} />
        <View style={styles.View_1_459}>
          <View style={styles.View_1_460}>
            <Text style={styles.Text_1_460}>mileage</Text>
          </View>
          <View style={styles.View_1_461}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
              }}
              style={styles.ImageBackground_1_462}
            />
          </View>
        </View>
        <View style={styles.View_1_464} />
        <View style={styles.View_1_465}>
          <View style={styles.View_1_466}>
            <Text style={styles.Text_1_466}>vehicle year</Text>
          </View>
          <View style={styles.View_1_467}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
              }}
              style={styles.ImageBackground_1_468}
            />
          </View>
        </View>
        <View style={styles.View_1_470} />
        <View style={styles.View_1_471}>
          <View style={styles.View_1_472}>
            <Text style={styles.Text_1_472}>distance</Text>
          </View>
          <View style={styles.View_1_473}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
              }}
              style={styles.ImageBackground_1_474}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_476}>
        <View style={styles.View_1_477}>
          <View style={styles.View_1_478}>
            <View style={styles.View_1_479}>
              <Text style={styles.Text_1_479}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_480}>
              <Text style={styles.Text_1_480}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ea6/c9aa/32cc7f1b067f5ffe54c1fb3914a56a06"
            }}
            style={styles.ImageBackground_1_481}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_482}
          />
          <View style={styles.View_1_488}>
            <Text style={styles.Text_1_488}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_489}>
          <View style={styles.View_1_490}>
            <View style={styles.View_1_491}>
              <Text style={styles.Text_1_491}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_492}>
              <Text style={styles.Text_1_492}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8b0/6238/ec4c682846c710654ddf7a228f346dcf"
            }}
            style={styles.ImageBackground_1_493}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_494}
          />
          <View style={styles.View_1_500}>
            <Text style={styles.Text_1_500}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_501}>
          <View style={styles.View_1_502}>
            <View style={styles.View_1_503}>
              <Text style={styles.Text_1_503}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_504}>
              <Text style={styles.Text_1_504}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ea6/c9aa/32cc7f1b067f5ffe54c1fb3914a56a06"
            }}
            style={styles.ImageBackground_1_505}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_506}
          />
          <View style={styles.View_1_512}>
            <Text style={styles.Text_1_512}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_513}>
          <View style={styles.View_1_514}>
            <View style={styles.View_1_515}>
              <Text style={styles.Text_1_515}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_516}>
              <Text style={styles.Text_1_516}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5156/5b66/2a3d4c3edba114e24f673bf438d97c45"
            }}
            style={styles.ImageBackground_1_517}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_518}
          />
          <View style={styles.View_1_524}>
            <Text style={styles.Text_1_524}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_525}>
          <View style={styles.View_1_526}>
            <View style={styles.View_1_527}>
              <Text style={styles.Text_1_527}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_528}>
              <Text style={styles.Text_1_528}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0716/60c7/8d56a8192cbe447018a9b05caf102986"
            }}
            style={styles.ImageBackground_1_529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_530}
          />
          <View style={styles.View_1_536}>
            <Text style={styles.Text_1_536}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_537}>
          <View style={styles.View_1_538}>
            <View style={styles.View_1_539}>
              <Text style={styles.Text_1_539}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_540}>
              <Text style={styles.Text_1_540}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ea6/c9aa/32cc7f1b067f5ffe54c1fb3914a56a06"
            }}
            style={styles.ImageBackground_1_541}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_542}
          />
          <View style={styles.View_1_548}>
            <Text style={styles.Text_1_548}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_549}>
          <View style={styles.View_1_550}>
            <View style={styles.View_1_551}>
              <Text style={styles.Text_1_551}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_552}>
              <Text style={styles.Text_1_552}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6310/ea94/a0256dab63f1030dfe10dbf912d72624"
            }}
            style={styles.ImageBackground_1_553}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_554}
          />
          <View style={styles.View_1_560}>
            <Text style={styles.Text_1_560}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_561}>
          <View style={styles.View_1_562}>
            <View style={styles.View_1_563}>
              <Text style={styles.Text_1_563}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_564}>
              <Text style={styles.Text_1_564}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac2e/d972/e6f07308ec256bb03006780d8e932fe0"
            }}
            style={styles.ImageBackground_1_565}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_566}
          />
          <View style={styles.View_1_572}>
            <Text style={styles.Text_1_572}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
        <View style={styles.View_1_573}>
          <View style={styles.View_1_574}>
            <View style={styles.View_1_575}>
              <Text style={styles.Text_1_575}>2020 cooper hardtop 4 door</Text>
            </View>
            <View style={styles.View_1_576}>
              <Text style={styles.Text_1_576}>classic trim</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ea6/c9aa/32cc7f1b067f5ffe54c1fb3914a56a06"
            }}
            style={styles.ImageBackground_1_577}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a764/883d/3cd2164c2300429638241a6750d5ee61"
            }}
            style={styles.ImageBackground_1_578}
          />
          <View style={styles.View_1_584}>
            <Text style={styles.Text_1_584}>
              south bay MINI | santa monica, CA. dealer sale price: $45,000
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_585}>
        <Text style={styles.Text_1_585}>
          Find a MINI Cooper from 1,254 cars.
        </Text>
      </View>
      <View style={styles.View_1_586}>
        <Text style={styles.Text_1_586}>Sort By: Lowest to Highest</Text>
      </View>
      <View style={styles.View_1_587}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd0/9cc2/8ec9eb8bc62190bbf576a30fa18e0ebd"
          }}
          style={styles.ImageBackground_1_588}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_424: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_425: {
    width: wp("24.583333333333332%"),
    minWidth: wp("24.583333333333332%"),
    height: 960,
    minHeight: 960,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 64,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_426: {
    width: wp("0.06944444444444445%"),
    minWidth: wp("0.06944444444444445%"),
    height: 960,
    minHeight: 960,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.51388888888889%"),
    top: 64,
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_427: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 63,
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_1_428: {
    width: wp("4.933171802096896%"),
    height: 24,
    top: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%")
  },
  View_1_433: {
    width: wp("24.583333333333332%"),
    minWidth: wp("24.583333333333332%"),
    height: 430,
    minHeight: 430,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 64,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_434: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 24
  },
  View_1_435: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_436: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 36, 156, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_437: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777777%"),
    top: 8
  },
  Text_1_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_438: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.819444444444445%"),
    top: 8
  },
  Text_1_438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_439: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.527777777777775%"),
    top: 8
  },
  Text_1_439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_440: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 80,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_441: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 97
  },
  View_1_442: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_442: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_443: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: 0
  },
  ImageBackground_1_444: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_446: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 137,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_447: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 154
  },
  View_1_448: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_448: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_449: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: 0
  },
  ImageBackground_1_450: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_452: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 194,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_453: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 211
  },
  View_1_454: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_454: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_455: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: 0
  },
  ImageBackground_1_456: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_458: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 251,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_459: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 268
  },
  View_1_460: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_461: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: 0
  },
  ImageBackground_1_462: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_464: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 308,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_465: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 325
  },
  View_1_466: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_467: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: 0
  },
  ImageBackground_1_468: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_470: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 365,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_471: {
    width: wp("21.25%"),
    minWidth: wp("21.25%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 382
  },
  View_1_472: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_473: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.583333333333332%"),
    top: 0
  },
  ImageBackground_1_474: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_476: {
    width: wp("72.08333333333333%"),
    minWidth: wp("72.08333333333333%"),
    height: 1176,
    minHeight: 1176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.25%"),
    top: 332
  },
  View_1_477: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_478: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 24
  },
  View_1_479: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_480: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_480: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_481: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_482: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: 288
  },
  View_1_488: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 312
  },
  Text_1_488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_489: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 400,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_490: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 24
  },
  View_1_491: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_492: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_493: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_494: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: 288
  },
  View_1_500: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 312
  },
  Text_1_500: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_501: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 800,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_502: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 24
  },
  View_1_503: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_503: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_504: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_505: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_506: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: 288
  },
  View_1_512: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666679%"),
    top: 312
  },
  Text_1_512: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_513: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_514: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 24
  },
  View_1_515: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_515: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_516: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_517: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_518: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: 288
  },
  View_1_524: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 312
  },
  Text_1_524: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_525: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.58333333333333%"),
    top: 400,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_526: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 24
  },
  View_1_527: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_527: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_528: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_528: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_529: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_530: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: 288
  },
  View_1_536: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 312
  },
  Text_1_536: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_537: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.58333333333333%"),
    top: 800,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_538: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 24
  },
  View_1_539: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_539: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_540: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_541: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_542: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: 288
  },
  View_1_548: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 312
  },
  Text_1_548: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_549: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.16666666666667%"),
    top: 0,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_550: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 24
  },
  View_1_551: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_551: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_552: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_552: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_553: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_554: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333329%"),
    top: 288
  },
  View_1_560: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 312
  },
  Text_1_560: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_561: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.16666666666667%"),
    top: 400,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_562: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 24
  },
  View_1_563: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_564: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_564: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_565: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_566: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333329%"),
    top: 288
  },
  View_1_572: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 312
  },
  Text_1_572: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_573: {
    width: wp("22.916666666666664%"),
    minWidth: wp("22.916666666666664%"),
    height: 376,
    minHeight: 376,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.16666666666667%"),
    top: 800,
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  View_1_574: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 24
  },
  View_1_575: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_576: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 32
  },
  Text_1_576: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_577: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: 184,
    minHeight: 184,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 88,
    resizeMode: "cover"
  },
  ImageBackground_1_578: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333329%"),
    top: 288
  },
  View_1_584: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666714%"),
    top: 312
  },
  Text_1_584: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_585: {
    width: wp("16.52777777777778%"),
    minWidth: wp("16.52777777777778%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.25%"),
    top: 292
  },
  Text_1_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_586: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.61111111111111%"),
    top: 292
  },
  Text_1_586: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_587: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.66666666666667%"),
    top: 292
  },
  ImageBackground_1_588: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
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
