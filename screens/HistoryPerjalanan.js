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
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const HistoryPerjalanan = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.historyPerjalanan, styles.frameParentBg]}>
      <View style={styles.navbarX}>
        <Text style={styles.navText}>History Perjalanan</Text>
      </View>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <Pressable style={styles.frame}>
          <View style={[styles.cardHistory, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - medan
            </Text>
            <Image
              style={[styles.lineIcon, styles.text1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/line2.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              10 Jul, 2023
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.frame1, styles.frameFlexBox]}>
          <View style={[styles.cardHistory, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - medan
            </Text>
            <Image
              style={[styles.lineIcon, styles.text1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              10 Jul, 2023
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.frame2, styles.frameFlexBox]}>
          <View style={[styles.cardHistory, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - medan
            </Text>
            <Image
              style={[styles.lineIcon, styles.text1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              10 Jul, 2023
            </Text>
          </View>
        </Pressable>
        <Pressable style={[styles.frame3, styles.frameFlexBox]}>
          <View style={[styles.cardHistory, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - medan
            </Text>
            <Image
              style={[styles.lineIcon, styles.text1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/line3.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              10 Jul, 2023
            </Text>
          </View>
        </Pressable>
        <TouchableOpacity
          style={[styles.frame4, styles.frameSpaceBlock]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HistoryTiket")}
        >
          <View style={[styles.cardHistory, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - medan
            </Text>
            <Image
              style={[styles.lineIcon, styles.text1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/line2.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              10 Jul, 2023
            </Text>
          </View>
        </TouchableOpacity>
        <Pressable style={[styles.frame5, styles.frameSpaceBlock]}>
          <View style={[styles.cardHistory, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - medan
            </Text>
            <Image
              style={[styles.lineIcon, styles.text1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/line2.png")}
            />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              10 Jul, 2023
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    width: 323,
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  textTypo: {
    height: 18,
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.heading1,
  },
  text1SpaceBlock: {
    marginTop: 10,
    width: 200,
  },
  frameSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xs,
    alignItems: "flex-end",
    justifyContent: "center",
    width: 323,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  navText: {
    marginLeft: -118.5,
    top: 35,
    left: "50%",
    fontSize: FontSize.heading1_size,
    letterSpacing: 0,
    lineHeight: 28,
    color: Color.colorDarkslateblue,
    width: 237,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    position: "absolute",
  },
  navbarX: {
    top: 4,
    borderRadius: Border.br_13xl,
    width: 375,
    height: 70,
    left: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    width: 200,
    height: 18,
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    fontWeight: "700",
  },
  lineIcon: {
    borderRadius: Border.br_7xs,
    maxHeight: "100%",
  },
  text1: {
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    color: Color.colorDarkgray,
    height: 18,
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    marginTop: 10,
  },
  cardHistory: {
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderWidth: 1,
    width: 318,
    height: 97,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_xl,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  frame: {
    top: 470,
    justifyContent: "center",
    width: 323,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 587,
    width: 323,
    position: "absolute",
    left: 0,
  },
  frame2: {
    top: 353,
    width: 323,
    position: "absolute",
    left: 0,
  },
  frame3: {
    top: 229,
    width: 323,
    position: "absolute",
    left: 0,
  },
  frame4: {
    top: 0,
  },
  frame5: {
    top: 117,
  },
  frameParent: {
    top: 90,
    left: 26,
    height: 684,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  historyPerjalanan: {
    flex: 1,
    width: "100%",
    height: 836,
  },
});

export default HistoryPerjalanan;
