import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Datepicker as RNKDatepicker, Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Pesan = () => {
  const [frameDatePicker, setFrameDatePicker] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.pesan}>
      <View style={styles.navbarX}>
        <Text style={[styles.navText, styles.textTypo]}>Pesan Tiket</Text>
      </View>
      <View style={[styles.orderBtnParent, styles.orderLayout]}>
        <TouchableOpacity
          style={[styles.orderBtn, styles.btnFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Tiket")}
        >
          <Text style={[styles.btnText, styles.btnFlexBox]}>Simpan</Text>
        </TouchableOpacity>
        <View style={[styles.input, styles.inputPosition1]}>
          <RNKDatepicker
            accessoryRight={<Icon name="calendar-range" pack="material" />}
            date={frameDatePicker}
            onSelect={setFrameDatePicker}
            status="primary"
            controlStyle={styles.frameDatePickerValue}
          />
          <Text style={styles.post}>Tanggal Keberangkatan</Text>
        </View>
        <View style={[styles.input1, styles.inputPosition1]}>
          <TextInput style={[styles.inputChild, styles.inputLayout]} />
          <Text style={styles.post}>Nomor HP</Text>
        </View>
        <View style={[styles.input2, styles.inputPosition]}>
          <TextInput style={[styles.inputItem, styles.inputLayout]} />
          <Text style={styles.post}>Alamat Tujuan</Text>
        </View>
        <View style={[styles.input3, styles.inputPosition]}>
          <TextInput style={[styles.inputItem, styles.inputLayout]} />
          <Text style={styles.post}>Nama</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDatePickerValue: {},
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    fontFamily: FontFamily.heading1,
  },
  orderLayout: {
    width: 303,
    position: "absolute",
    overflow: "hidden",
  },
  btnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputPosition1: {
    height: 71,
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 44,
    borderWidth: 1,
    borderColor: Color.colorGray_400,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 27,
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  inputPosition: {
    left: -3,
    right: 3,
    height: 71,
    top: "50%",
    position: "absolute",
  },
  navText: {
    marginLeft: -118.5,
    top: 35,
    left: "50%",
    fontSize: FontSize.heading1_size,
    color: Color.colorDarkslateblue,
    width: 237,
    height: 20,
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
  },
  navbarX: {
    borderRadius: Border.br_13xl,
    height: 70,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  btnText: {
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    display: "flex",
    width: 131,
    height: 28,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    fontFamily: FontFamily.heading1,
  },
  orderBtn: {
    top: 570,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorDodgerblue_100,
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xl,
    width: 303,
    position: "absolute",
    overflow: "hidden",
    left: 0,
  },
  post: {
    left: 4,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    fontWeight: "600",
    color: Color.colorRoyalblue_100,
    textAlign: "left",
    width: 246,
    height: 16,
    fontFamily: FontFamily.heading1,
    top: 0,
    position: "absolute",
  },
  input: {
    marginTop: -3,
  },
  inputChild: {
    right: "0%",
    left: "0%",
  },
  input1: {
    marginTop: -107,
  },
  inputItem: {
    right: "-0.99%",
    left: "0.99%",
  },
  input2: {
    marginTop: -211,
  },
  input3: {
    marginTop: -315,
  },
  orderBtnParent: {
    right: 36,
    bottom: 91,
    height: 630,
    backgroundColor: Color.colorWhite,
    width: 303,
  },
  pesan: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Pesan;
