import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Tiket = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tiket}>
      <View style={styles.navbarX}>
        <Text style={[styles.navText, styles.textFlexBox]}>Tiket</Text>
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frame, styles.frameParentPosition]}>
          <View style={[styles.textParent, styles.textLayout2]}>
            <Text style={[styles.text, styles.textLayout1]}>09 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.frameParentPosition]}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.frame1, styles.textLayout]}>
              <Text style={[styles.text1, styles.textLayout]}>
                Jl. turi No.10
              </Text>
              <Text style={[styles.text2, styles.textLayout]}>Rp. 250.000</Text>
            </View>
          </View>
          <View style={[styles.textGroup, styles.frame3Position]}>
            <Text style={[styles.text, styles.textLayout1]}>09 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.frameParentPosition]}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.frame1, styles.textLayout]}>
              <Text style={[styles.text1, styles.textLayout]}>
                Jl. turi No.10
              </Text>
              <Text style={[styles.text2, styles.textLayout]}>Rp. 250.000</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame3, styles.frame3Position]}>
          <TouchableOpacity
            style={[styles.orderBtn, styles.frame3Position]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Pesan")}
          >
            <Text style={[styles.btnText, styles.btnFlexBox]}>Pesan Tiket</Text>
          </TouchableOpacity>
          <View style={[styles.textContainer, styles.textLayout2]}>
            <Text style={[styles.text, styles.textLayout1]}>09 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.frameParentPosition]}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <View style={[styles.frame1, styles.textLayout]}>
              <Text style={[styles.text1, styles.textLayout]}>
                Jl. turi No.10
              </Text>
              <Text style={[styles.text2, styles.textLayout]}>Rp. 250.000</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.textLayout2]}>
          <Text style={[styles.text, styles.textLayout1]}>09 Aug, 2023</Text>
          <Image
            style={[styles.lineIcon, styles.frameParentPosition]}
            contentFit="cover"
            source={require("../assets/line.png")}
          />
          <View style={[styles.frame1, styles.textLayout]}>
            <Text style={[styles.text1, styles.textLayout]}>
              Jl. turi No.10
            </Text>
            <Text style={[styles.text2, styles.textLayout]}>Rp. 250.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  frameParentPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  textLayout2: {
    height: 97,
    borderWidth: 1,
    borderColor: Color.colorDodgerblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    width: 318,
    backgroundColor: Color.colorWhite,
  },
  textLayout1: {
    height: 18,
    textTransform: "capitalize",
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.heading1,
  },
  textLayout: {
    width: 275,
    position: "absolute",
  },
  frame3Position: {
    left: 1,
    overflow: "hidden",
    position: "absolute",
  },
  btnFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginLeft: -118.5,
    top: 35,
    left: "50%",
    fontSize: FontSize.heading1_size,
    width: 237,
    height: 20,
    color: Color.colorDarkslateblue,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
  },
  navbarX: {
    borderRadius: Border.br_13xl,
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 66,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    color: Color.colorSilver,
    width: 249,
    justifyContent: "center",
    left: 22,
    textAlign: "center",
    position: "absolute",
  },
  lineIcon: {
    top: 59,
    right: 22,
    borderRadius: Border.br_7xs,
    maxWidth: "100%",
    height: 0,
    left: 22,
    overflow: "hidden",
  },
  text1: {
    top: 18,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    height: 18,
    textTransform: "capitalize",
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.heading1,
    color: Color.colorDarkslateblue,
    fontWeight: "700",
    left: 0,
  },
  text2: {
    fontSize: FontSize.size_lg,
    color: Color.colorDodgerblue_100,
    textAlign: "right",
    height: 18,
    textTransform: "capitalize",
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    width: 275,
    right: 0,
    top: 0,
  },
  frame1: {
    top: 14,
    height: 36,
    left: 22,
    overflow: "hidden",
  },
  textParent: {
    top: 242,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  textGroup: {
    height: 97,
    borderWidth: 1,
    borderColor: Color.colorDodgerblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    width: 318,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  frame: {
    height: 339,
    width: 319,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  btnText: {
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    width: 131,
    height: 28,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
  },
  orderBtn: {
    top: 446,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorDodgerblue_100,
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xl,
    justifyContent: "center",
    alignItems: "center",
    width: 318,
    left: 1,
  },
  textContainer: {
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame3: {
    top: 121,
    height: 506,
    width: 319,
  },
  frameView: {
    top: 363,
    left: 2,
    overflow: "hidden",
    position: "absolute",
  },
  frameParent: {
    top: 93,
    left: 27,
    width: 321,
    height: 627,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  tiket: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Tiket;
