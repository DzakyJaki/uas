import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View style={styles.frame}>
        <View style={styles.enterBtnFlexBox}>
          <Image
            style={styles.logoHmt1}
            contentFit="cover"
            source={require("../assets/logo-hmt-1.png")}
          />
          <Text style={[styles.humairaMandiri, styles.transportSpaceBlock]}>
            HUMAIRA MANDIRI
          </Text>
          <Text style={[styles.transport, styles.transportSpaceBlock]}>
            TRANSPORT
          </Text>
          <Text style={[styles.pekanbaruMedan, styles.btnTextFlexBox]}>
            Pekanbaru - Medan - Rantau Perapat
          </Text>
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View>
            <View style={styles.input}>
              <TextInput style={[styles.inputChild, styles.loginLayout]} />
              <Text style={[styles.post, styles.postLayout]}>Username</Text>
            </View>
          </View>
          <View style={styles.inputs1}>
            <View style={styles.input}>
              <TextInput
                style={[styles.inputChild, styles.loginLayout]}
                secureTextEntry={true}
              />
              <Text style={[styles.post, styles.postLayout]}>Password</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.enterBtn, styles.enterBtnFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoginAs")}
        >
          <Text style={[styles.btnText, styles.postLayout]}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  transportSpaceBlock: {
    marginTop: 14,
    fontFamily: FontFamily.heading1,
  },
  btnTextFlexBox: {
    letterSpacing: 0,
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  postLayout: {
    height: 16,
    fontFamily: FontFamily.heading1,
  },
  enterBtnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoHmt1: {
    borderRadius: 7,
    width: 96,
    height: 99,
  },
  humairaMandiri: {
    fontSize: 30,
    color: "rgba(16, 105, 227, 0.74)",
    height: 40,
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 1,
    marginTop: 14,
    fontFamily: FontFamily.heading1,
    justifyContent: "center",
    alignItems: "center",
    width: 294,
  },
  transport: {
    fontSize: 24,
    color: "rgba(16, 105, 227, 0.78)",
    width: 153,
    height: 28,
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 1,
    marginTop: 14,
    fontFamily: FontFamily.heading1,
    justifyContent: "center",
    alignItems: "center",
  },
  pekanbaruMedan: {
    color: "rgba(47, 136, 252, 0.6)",
    height: 21,
    fontSize: FontSize.size_smi,
    marginTop: 14,
    fontFamily: FontFamily.heading1,
    letterSpacing: 0,
    width: 294,
  },
  frame: {
    height: 604,
    overflow: "hidden",
    width: 294,
    alignItems: "center",
  },
  inputChild: {
    top: 27,
    right: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    height: 44,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  post: {
    top: 0,
    left: 4,
    lineHeight: 18,
    fontWeight: "600",
    color: Color.colorRoyalblue_100,
    textAlign: "left",
    width: 246,
    position: "absolute",
    fontSize: FontSize.size_smi,
  },
  input: {
    height: 71,
    width: 303,
  },
  inputs1: {
    marginTop: 19,
  },
  frame2: {
    height: 161,
    width: 303,
    overflow: "hidden",
    alignItems: "center",
  },
  btnText: {
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    width: 375,
    letterSpacing: 0,
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  enterBtn: {
    backgroundColor: Color.colorRoyalblue_100,
    height: 60,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xl,
    marginTop: 52,
    borderRadius: Border.br_mini,
    width: 303,
  },
  frame1: {
    width: 306,
    height: 273,
    paddingRight: 3,
    marginTop: -336,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  login: {
    flex: 1,
    height: 812,
    paddingLeft: 33,
    paddingTop: Padding.p_82xl,
    paddingRight: 36,
    paddingBottom: Padding.p_82xl,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Login;
