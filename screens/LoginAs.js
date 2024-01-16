import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const LoginAs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginAs}>
      <View style={styles.frame} />
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <View style={styles.statusLoginWrapper}>
            <Text style={styles.statusLogin}>Status Login</Text>
          </View>
        </View>
        <View style={styles.frame3}>
          <TouchableOpacity
            style={styles.customerBtn}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Tiket")}
          >
            <View style={styles.customerBtn1}>
              <Text style={styles.btnText}>Customer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.frame4}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HistoryPerjalanan")}
          >
            <View style={styles.customerBtn1}>
              <Text style={styles.btnText}>Admin</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 764,
    left: 164,
    width: 47,
    height: 10,
    overflow: "hidden",
  },
  frameIcon: {
    position: "relative",
    width: 377,
    height: 364,
    overflow: "hidden",
  },
  statusLogin: {
    position: "relative",
    fontSize: 27,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  statusLoginWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 28,
    marginLeft: 7,
    marginTop: 56,
  },
  frame2: {
    alignSelf: "stretch",
    height: 448,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnText: {
    position: "relative",
    fontSize: FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.heading1,
    color: Color.colorDodgerblue_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 301,
    height: 16,
  },
  customerBtn1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDodgerblue_100,
    borderWidth: 1,
    width: 303,
    height: 60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xl,
  },
  customerBtn: {
    width: 311,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame4: {
    width: 311,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 21,
  },
  frame3: {
    alignSelf: "stretch",
    height: 141,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 57,
  },
  frame1: {
    position: "absolute",
    top: 58,
    left: -1,
    width: 377,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginAs: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default LoginAs;
