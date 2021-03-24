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
      <View style={styles.View_1_3}>
        <View style={styles.View_1_4} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f00/289a/67e17636837948c383074d2128568181"
          }}
          style={styles.ImageBackground_1_5}
        />
        <View style={styles.View_1_6} />
        <View style={styles.View_1_7}>
          <View style={styles.View_1_8} />
          <View style={styles.View_1_9}>
            <View style={styles.View_1_10} />
            <View style={styles.View_1_11}>
              <Text style={styles.Text_1_11}>Bags</Text>
            </View>
            <View style={styles.View_1_12}>
              <Text style={styles.Text_1_12}>Visval Backpack</Text>
            </View>
            <View style={styles.View_1_13}>
              <View style={styles.View_1_14}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/5211/db1ea3fe4e2e442979e29c89d47cc434"
                  }}
                  style={styles.ImageBackground_1_15}
                />
                <View style={styles.View_1_18}>
                  <Text style={styles.Text_1_18}>1/10</Text>
                </View>
              </View>
              <View style={styles.View_1_19}>
                <Text style={styles.Text_1_19}>Popular</Text>
              </View>
              <View style={styles.View_1_20}>
                <View style={styles.View_1_21} />
                <View style={styles.View_1_22}>
                  <View style={styles.View_1_23}>
                    <Text style={styles.Text_1_23}>DENVER DUFFLE BAG NAVY</Text>
                  </View>
                  <View style={styles.View_1_24}>
                    <View style={styles.View_1_25} />
                    <View style={styles.View_1_26}>
                      <View style={styles.View_1_27} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67eb/b0c2/513cb5fa93e3ff2d9438294f2dbb7555"
                        }}
                        style={styles.ImageBackground_1_28}
                      />
                      <View style={styles.View_1_29} />
                    </View>
                    <View style={styles.View_1_30}>
                      <View style={styles.View_1_31}>
                        <Text style={styles.Text_1_31}> 263.200</Text>
                      </View>
                      <View style={styles.View_1_32}>
                        <Text style={styles.Text_1_32}>RP.</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_33}>
                  <View style={styles.View_1_34}>
                    <Text style={styles.Text_1_34}>TOTEBAG TETRA NAVY</Text>
                  </View>
                  <View style={styles.View_1_35}>
                    <View style={styles.View_1_36}>
                      <View style={styles.View_1_37} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1003/0af6/ee87c58c336183af96361bcc79646cc4"
                        }}
                        style={styles.ImageBackground_1_38}
                      />
                      <View style={styles.View_1_39}>
                        <View style={styles.View_1_40} />
                        <View style={styles.View_1_41}>
                          <Text style={styles.Text_1_41}>224.100</Text>
                        </View>
                        <View style={styles.View_1_42}>
                          <Text style={styles.Text_1_42}>Rp.</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_1_43}>
                      <View style={styles.View_1_44} />
                      <View style={styles.View_1_45}>
                        <Text style={styles.Text_1_45}>SALE</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_46} />
        <View style={styles.View_1_47}>
          <View style={styles.View_1_48} />
          <View style={styles.View_1_49}>
            <View style={styles.View_1_50} />
            <View style={styles.View_1_51} />
            <View style={styles.View_1_52} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13b9/bab7/7c76a50fc060d4c562ce3b2ba69a8c09"
          }}
          style={styles.ImageBackground_1_53}
        />
        <View style={styles.View_1_54}>
          <View style={styles.View_1_55}>
            <Text style={styles.Text_1_55}>Reviews 39</Text>
          </View>
          <View style={styles.View_1_56}>
            <View style={styles.View_1_57} />
            <View style={styles.View_1_58}>
              <Text style={styles.Text_1_58}>SALE</Text>
            </View>
          </View>
          <View style={styles.View_1_59}>
            <Text style={styles.Text_1_59}>360</Text>
          </View>
          <View style={styles.View_1_60}>
            <Text style={styles.Text_1_60}>BACKPACK TETRA NAVY</Text>
          </View>
          <View style={styles.View_1_61}>
            <Text style={styles.Text_1_61}>
              Tetra Backpack, which has a mix of urban and nature designs, has
              three color choices.
            </Text>
          </View>
          <View style={styles.View_1_62}>
            <Text style={styles.Text_1_62}>
              Dimension: H: 47,5 x W: 31 x D: 15 cm Capacity: 22 L Weight: 0,6
              Kg
            </Text>
          </View>
          <View style={styles.View_1_63}>
            <View style={styles.View_1_64} />
            <View style={styles.View_1_65}>
              <Text style={styles.Text_1_65}>+ Add To Cart</Text>
            </View>
          </View>
          <View style={styles.View_1_66}>
            <View style={styles.View_1_67} />
          </View>
          <View style={styles.View_1_68}>
            <Text style={styles.Text_1_68}>287.100</Text>
          </View>
          <View style={styles.View_1_69}>
            <Text style={styles.Text_1_69}>Rp.</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b76/66b7/13beaae215a70628dce2881485de4ac0"
            }}
            style={styles.ImageBackground_1_70}
          />
          <View style={styles.View_1_71}>
            <View style={styles.View_1_72}>
              <Text style={styles.Text_1_72}>Spesifikasi</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e92/c0ca/c6042ae45f3cfdf30ed4d9900de97530"
            }}
            style={styles.ImageBackground_1_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45bb/1780/cf1267cf802291e5a01c0da8449902ac"
            }}
            style={styles.ImageBackground_1_74}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c18/480c/8b1b8af571a91dcf3953b47b16c19fee"
            }}
            style={styles.ImageBackground_1_75}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6015/8ed5/07ed97580c0492dfa72a2360b61b7bf5"
            }}
            style={styles.ImageBackground_1_76}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc1/48a7/2ae9d5fcff776a2f5eb9558355035152"
          }}
          style={styles.ImageBackground_1_77}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5260/aad6/762adfcc0c99ae5e35db60a54780fb62"
          }}
          style={styles.ImageBackground_1_83}
        />
        <View style={styles.View_1_86}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408a/90dc/6261b06f800cb9d56fedd6e46c18ae66"
            }}
            style={styles.ImageBackground_1_87}
          />
          <View style={styles.View_1_88}>
            <View style={styles.View_1_89} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c9/4869/3e63bcbbf6a875e251d00d1a39c3723e"
              }}
              style={styles.ImageBackground_1_90}
            />
          </View>
          <View style={styles.View_1_91}>
            <View style={styles.View_1_92} />
            <View style={styles.View_1_93} />
            <View style={styles.View_1_94} />
            <View style={styles.View_1_95} />
          </View>
        </View>
        <View style={styles.View_1_96}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408a/90dc/6261b06f800cb9d56fedd6e46c18ae66"
            }}
            style={styles.ImageBackground_1_97}
          />
          <View style={styles.View_1_98}>
            <View style={styles.View_1_99} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c9/4869/3e63bcbbf6a875e251d00d1a39c3723e"
              }}
              style={styles.ImageBackground_1_100}
            />
          </View>
          <View style={styles.View_1_101}>
            <View style={styles.View_1_102} />
            <View style={styles.View_1_103} />
            <View style={styles.View_1_104} />
            <View style={styles.View_1_105} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a02a/53c1/178286c5b25ed214c4b8a2c7bf0a579d"
          }}
          style={styles.ImageBackground_1_106}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_3: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: 72
  },
  View_1_4: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46
  },
  ImageBackground_1_5: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 486,
    minHeight: 486,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 157,
    resizeMode: "cover"
  },
  View_1_6: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 483,
    minHeight: 483,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 160
  },
  View_1_7: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_8: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46
  },
  View_1_9: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_10: {
    width: wp("25.5%"),
    minWidth: wp("25.5%"),
    height: 73,
    minHeight: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0625%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_11: {
    width: wp("3.875%"),
    minWidth: wp("3.875%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: 21
  },
  Text_1_11: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_12: {
    width: wp("19.8125%"),
    minWidth: wp("19.8125%"),
    minHeight: 109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 358
  },
  Text_1_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_13: {
    width: wp("38.9375%"),
    minWidth: wp("38.9375%"),
    height: 292,
    minHeight: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 536
  },
  View_1_14: {
    width: wp("8.3125%"),
    minWidth: wp("8.3125%"),
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.3125%"),
    top: 6
  },
  ImageBackground_1_15: {
    width: wp("8.3125%"),
    minWidth: wp("8.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 23
  },
  View_1_18: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3125%"),
    top: 0
  },
  Text_1_18: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_19: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_19: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_20: {
    width: wp("38.9375%"),
    minWidth: wp("38.9375%"),
    height: 205,
    minHeight: 205,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 87
  },
  View_1_21: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.9375%"),
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_1_22: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 205,
    minHeight: 205,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_23: {
    width: wp("10.375%"),
    minWidth: wp("10.375%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.75%"),
    top: 182
  },
  Text_1_23: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_24: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_25: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_1_26: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_27: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_1_28: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_1_29: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_1_30: {
    width: wp("7.375%"),
    minWidth: wp("7.375%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    top: 118
  },
  View_1_31: {
    width: wp("6.4375%"),
    minWidth: wp("6.4375%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375%"),
    top: 8
  },
  Text_1_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_32: {
    width: wp("1.5%"),
    minWidth: wp("1.5%"),
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_32: {
    color: "rgba(247, 182, 4, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_33: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: 205,
    minHeight: 205,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.562500000000004%"),
    top: 0
  },
  View_1_34: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3749999999999964%"),
    top: 182
  },
  Text_1_34: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_35: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_36: {
    width: wp("12.0625%"),
    minWidth: wp("12.0625%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9374999999999964%"),
    top: 0
  },
  View_1_37: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_1_38: {
    width: wp("10.375%"),
    minWidth: wp("10.375%"),
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.875%"),
    top: 3,
    resizeMode: "cover"
  },
  View_1_39: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0625%"),
    top: 0
  },
  View_1_40: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: 171,
    minHeight: 171,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_1_41: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: 127
  },
  Text_1_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_42: {
    width: wp("1.625%"),
    minWidth: wp("1.625%"),
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8125%"),
    top: 115
  },
  Text_1_42: {
    color: "rgba(247, 182, 4, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_43: {
    width: wp("4.4375%"),
    minWidth: wp("4.4375%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 72
  },
  View_1_44: {
    width: wp("4.4375%"),
    minWidth: wp("4.4375%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(247, 182, 4, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1_45: {
    width: wp("2.75%"),
    minWidth: wp("2.75%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8749999999999964%"),
    top: 0
  },
  Text_1_45: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.625%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46
  },
  View_1_47: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.625%"),
    top: 0
  },
  View_1_48: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    borderBottomLeftRadius: 46,
    borderBottomRightRadius: 46
  },
  View_1_49: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 1055,
    minHeight: 1055,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_50: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 451,
    minHeight: 451,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_51: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 417,
    minHeight: 417,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 703,
    backgroundColor: "rgba(246, 248, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1_52: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    height: 417,
    minHeight: 417,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 858,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_1_53: {
    width: wp("19.25%"),
    minWidth: wp("19.25%"),
    height: 308,
    minHeight: 308,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.06249999999999%"),
    top: 78,
    resizeMode: "cover"
  },
  View_1_54: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: 853,
    minHeight: 853,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.375%"),
    top: 126
  },
  View_1_55: {
    width: wp("9.5%"),
    minWidth: wp("9.5%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.062499999999992895%"),
    top: 647
  },
  Text_1_55: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 21.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_56: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25%"),
    top: 0
  },
  View_1_57: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(247, 182, 4, 1)",
    borderColor: "rgba(247, 182, 4, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_1_58: {
    width: wp("2.75%"),
    minWidth: wp("2.75%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8749999999999929%"),
    top: 1
  },
  Text_1_58: {
    color: "rgba(26, 51, 101, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_59: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.1875%"),
    top: 170
  },
  Text_1_59: {
    color: "rgba(26, 51, 101, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_60: {
    width: wp("12.812499999999998%"),
    minWidth: wp("12.812499999999998%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 234
  },
  Text_1_60: {
    color: "rgba(26, 51, 101, 1)",
    fontSize: 23.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_61: {
    width: wp("26.937499999999996%"),
    minWidth: wp("26.937499999999996%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.062499999999992895%"),
    top: 338
  },
  Text_1_61: {
    color: "rgba(26, 51, 101, 1)",
    fontSize: 13.700000762939453,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_62: {
    width: wp("26.937499999999996%"),
    minWidth: wp("26.937499999999996%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.062499999999992895%"),
    top: 472
  },
  Text_1_62: {
    color: "rgba(26, 51, 101, 1)",
    fontSize: 13.700000762939453,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_63: {
    width: wp("12.3125%"),
    minWidth: wp("12.3125%"),
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.6875%"),
    top: 769
  },
  View_1_64: {
    width: wp("12.3125%"),
    minWidth: wp("12.3125%"),
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(33, 57, 96, 1)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_1_65: {
    width: wp("9.8125%"),
    minWidth: wp("9.8125%"),
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2500057220458984%"),
    top: 29
  },
  Text_1_65: {
    color: "rgba(244, 244, 244, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("13.25%"),
    minWidth: wp("13.25%"),
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.062499999999992895%"),
    top: 769
  },
  View_1_67: {
    width: wp("13.25%"),
    minWidth: wp("13.25%"),
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    borderColor: "rgba(217, 217, 217, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_1_68: {
    width: wp("9.25%"),
    minWidth: wp("9.25%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: 786
  },
  Text_1_68: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_69: {
    width: wp("2.125%"),
    minWidth: wp("2.125%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375%"),
    top: 786
  },
  Text_1_69: {
    color: "rgba(33, 57, 96, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_70: {
    width: wp("2.3125%"),
    minWidth: wp("2.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.65625%"),
    top: 598
  },
  View_1_71: {
    width: wp("8.4375%"),
    minWidth: wp("8.4375%"),
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.5625%"),
    top: 415
  },
  View_1_72: {
    width: wp("8.4375%"),
    minWidth: wp("8.4375%"),
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_72: {
    color: "rgba(26, 51, 101, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_73: {
    width: wp("4.1875%"),
    minWidth: wp("4.1875%"),
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.5%"),
    top: 634
  },
  ImageBackground_1_74: {
    width: wp("4.1875%"),
    minWidth: wp("4.1875%"),
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.75%"),
    top: 634
  },
  ImageBackground_1_75: {
    width: wp("4.1875%"),
    minWidth: wp("4.1875%"),
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.0625%"),
    top: 634
  },
  ImageBackground_1_76: {
    width: wp("4.1875%"),
    minWidth: wp("4.1875%"),
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.3125%"),
    top: 634
  },
  ImageBackground_1_77: {
    width: wp("9.0625%"),
    minWidth: wp("9.0625%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.9375%"),
    top: 399
  },
  ImageBackground_1_83: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.5625%"),
    top: 155
  },
  View_1_86: {
    width: wp("25.0625%"),
    minWidth: wp("25.0625%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6875%"),
    top: 60
  },
  ImageBackground_1_87: {
    width: wp("4.625%"),
    minWidth: wp("4.625%"),
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.9375%"),
    top: 4,
    resizeMode: "cover"
  },
  View_1_88: {
    width: wp("1.375%"),
    minWidth: wp("1.375%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.6875%"),
    top: 0
  },
  View_1_89: {
    width: wp("1.375%"),
    minWidth: wp("1.375%"),
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 7,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1_90: {
    width: wp("0.6875%"),
    minWidth: wp("0.6875%"),
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: 0
  },
  View_1_91: {
    width: wp("1.1875%"),
    minWidth: wp("1.1875%"),
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 5
  },
  View_1_92: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_93: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.875%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_94: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_95: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.875%"),
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_96: {
    width: wp("25.0625%"),
    minWidth: wp("25.0625%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.3125%"),
    top: 60
  },
  ImageBackground_1_97: {
    width: wp("4.625%"),
    minWidth: wp("4.625%"),
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.9375%"),
    top: 4,
    resizeMode: "cover"
  },
  View_1_98: {
    width: wp("1.375%"),
    minWidth: wp("1.375%"),
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.6875%"),
    top: 0
  },
  View_1_99: {
    width: wp("1.375%"),
    minWidth: wp("1.375%"),
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 7,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_1_100: {
    width: wp("0.6875%"),
    minWidth: wp("0.6875%"),
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: 0
  },
  View_1_101: {
    width: wp("1.1875%"),
    minWidth: wp("1.1875%"),
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 5
  },
  View_1_102: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_103: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.875%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_104: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_105: {
    width: wp("0.3125%"),
    minWidth: wp("0.3125%"),
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.875%"),
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_1_106: {
    width: wp("1.7500000000000002%"),
    height: 22,
    top: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.8125%")
  },
  View_2: { height: 1200 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
