import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const HistoryTiket = () => {
  return (
    <View style={styles.historyTiket}>
      <View style={styles.navbarX}>
        <Text style={[styles.navText, styles.navTextTypo]}>
          History Perjalanan
        </Text>
      </View>
      <View style={styles.scheduleParent}>
        <View style={[styles.schedule, styles.schedulePosition]}>
          <Text style={styles.pekanbaruMedan}>Pekanbaru - Medan</Text>
          <Text style={[styles.aug2023, styles.navTextTypo]}>10 Aug, 2023</Text>
        </View>
        <View style={[styles.perjalananCard, styles.perjalananCardPosition]}>
          <View style={styles.frame}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - Medan
            </Text>
            <Text style={styles.text1}>10 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.schedulePosition]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
          </View>
          <Text style={[styles.andiSiregar, styles.frame1SpaceBlock]}>
            Andi Siregar - 0812232313
          </Text>
          <View style={[styles.frame1, styles.frameLayout]}>
            <View style={[styles.frame2, styles.frame2Layout]}>
              <Text style={[styles.jlTuriNo, styles.frame2Layout]}>
                Jl. Turi no. 10
              </Text>
            </View>
            <View style={[styles.frame3, styles.text2Layout]}>
              <Text style={[styles.text2, styles.text2Layout]}>
                Rp. 250.000
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.perjalananCard1, styles.perjalananCardPosition]}>
          <View style={styles.frame}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - Medan
            </Text>
            <Text style={styles.text1}>10 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.schedulePosition]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
          </View>
          <Text style={[styles.andiSiregar, styles.frame1SpaceBlock]}>
            Andi Siregar - 0812232313
          </Text>
          <View style={[styles.frame1, styles.frameLayout]}>
            <View style={[styles.frame2, styles.frame2Layout]}>
              <Text style={[styles.jlTuriNo, styles.frame2Layout]}>
                Jl. Turi no. 10
              </Text>
            </View>
            <View style={[styles.frame3, styles.text2Layout]}>
              <Text style={[styles.text2, styles.text2Layout]}>
                Rp. 250.000
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.perjalananCard2, styles.perjalananCardPosition]}>
          <View style={styles.frame}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - Medan
            </Text>
            <Text style={styles.text1}>10 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.schedulePosition]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
          </View>
          <Text style={[styles.andiSiregar, styles.frame1SpaceBlock]}>
            Andi Siregar - 0812232313
          </Text>
          <View style={[styles.frame1, styles.frameLayout]}>
            <View style={[styles.frame2, styles.frame2Layout]}>
              <Text style={[styles.jlTuriNo, styles.frame2Layout]}>
                Jl. Turi no. 10
              </Text>
            </View>
            <View style={[styles.frame3, styles.text2Layout]}>
              <Text style={[styles.text2, styles.text2Layout]}>
                Rp. 250.000
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.perjalananCard3, styles.perjalananCardPosition]}>
          <View style={styles.frame}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - Medan
            </Text>
            <Text style={styles.text1}>10 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.schedulePosition]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
          </View>
          <Text style={[styles.andiSiregar, styles.frame1SpaceBlock]}>
            Andi Siregar - 0812232313
          </Text>
          <View style={[styles.frame1, styles.frameLayout]}>
            <View style={[styles.frame2, styles.frame2Layout]}>
              <Text style={[styles.jlTuriNo, styles.frame2Layout]}>
                Jl. Turi no. 10
              </Text>
            </View>
            <View style={[styles.frame3, styles.text2Layout]}>
              <Text style={[styles.text2, styles.text2Layout]}>
                Rp. 250.000
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.perjalananCard4, styles.perjalananCardPosition]}>
          <View style={styles.frame}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - Medan
            </Text>
            <Text style={styles.text1}>10 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.schedulePosition]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
          </View>
          <Text style={[styles.andiSiregar, styles.frame1SpaceBlock]}>
            Andi Siregar - 0812232313
          </Text>
          <View style={[styles.frame1, styles.frameLayout]}>
            <View style={[styles.frame2, styles.frame2Layout]}>
              <Text style={[styles.jlTuriNo, styles.frame2Layout]}>
                Jl. Turi no. 10
              </Text>
            </View>
            <View style={[styles.frame3, styles.text2Layout]}>
              <Text style={[styles.text2, styles.text2Layout]}>
                Rp. 250.000
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.perjalananCard5, styles.perjalananCardPosition]}>
          <View style={styles.frame}>
            <Text style={[styles.text, styles.textTypo]}>
              Pekanbaru - Medan
            </Text>
            <Text style={styles.text1}>10 Aug, 2023</Text>
            <Image
              style={[styles.lineIcon, styles.schedulePosition]}
              contentFit="cover"
              source={require("../assets/line1.png")}
            />
          </View>
          <Text style={[styles.andiSiregar, styles.frame1SpaceBlock]}>
            Andi Siregar - 0812232313
          </Text>
          <View style={[styles.frame1, styles.frameLayout]}>
            <View style={[styles.frame2, styles.frame2Layout]}>
              <Text style={[styles.jlTuriNo, styles.frame2Layout]}>
                Jl. Turi no. 10
              </Text>
            </View>
            <View style={[styles.frame3, styles.text2Layout]}>
              <Text style={[styles.text2, styles.text2Layout]}>
                Rp. 250.000
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navTextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
  },
  schedulePosition: {
    left: 0,
    position: "absolute",
  },
  perjalananCardPosition: {
    paddingBottom: Padding.p_smi,
    paddingRight: Padding.p_2xs,
    paddingTop: Padding.p_smi,
    paddingLeft: Padding.p_xs,
    height: 97,
    borderWidth: 1,
    borderColor: Color.colorDodgerblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    left: 0,
    width: 329,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    height: 18,
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
  },
  frame1SpaceBlock: {
    marginTop: 4,
    alignItems: "center",
  },
  frameLayout: {
    height: 29,
    overflow: "hidden",
  },
  frame2Layout: {
    width: 62,
    alignItems: "center",
  },
  text2Layout: {
    width: 71,
    alignItems: "center",
  },
  navText: {
    marginLeft: -119,
    top: 35,
    left: "50%",
    width: 237,
    height: 20,
    color: Color.colorDarkslateblue,
    fontSize: FontSize.heading1_size,
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    position: "absolute",
  },
  navbarX: {
    right: -1,
    left: 1,
    borderRadius: Border.br_13xl,
    height: 70,
    top: 0,
    position: "absolute",
  },
  pekanbaruMedan: {
    width: 196,
    height: 31,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
    fontSize: FontSize.heading1_size,
  },
  aug2023: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.33)",
    width: 105,
    height: 21,
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    lineHeight: 28,
    letterSpacing: 0,
  },
  schedule: {
    width: 202,
    height: 58,
    top: 0,
  },
  text: {
    left: 3,
    width: 121,
    justifyContent: "center",
    alignItems: "center",
    height: 18,
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 1,
    left: 236,
    color: Color.colorGray_200,
    width: 76,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.heading1,
    position: "absolute",
  },
  lineIcon: {
    top: 18,
    right: 6,
    borderRadius: Border.br_7xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frame: {
    width: 312,
    height: 19,
    overflow: "hidden",
  },
  andiSiregar: {
    width: 208,
    height: 13,
    textAlign: "left",
    fontWeight: "500",
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    fontFamily: FontFamily.heading1,
    fontSize: FontSize.size_2xs,
    marginTop: 4,
    color: Color.colorBlack,
  },
  jlTuriNo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_300,
    height: 11,
    textAlign: "left",
    fontWeight: "500",
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    fontFamily: FontFamily.heading1,
  },
  frame2: {
    height: 29,
    overflow: "hidden",
  },
  text2: {
    color: Color.colorDodgerblue_100,
    textAlign: "right",
    height: 18,
    display: "flex",
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.heading1,
    fontWeight: "700",
    width: 71,
  },
  frame3: {
    justifyContent: "flex-end",
    marginLeft: 173,
    height: 29,
    overflow: "hidden",
  },
  frame1: {
    width: 306,
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
  },
  perjalananCard: {
    top: 79,
  },
  perjalananCard1: {
    top: 200,
  },
  perjalananCard2: {
    top: 321,
  },
  perjalananCard3: {
    top: 442,
  },
  perjalananCard4: {
    top: 563,
  },
  perjalananCard5: {
    top: 684,
  },
  scheduleParent: {
    top: 70,
    left: 29,
    height: 781,
    width: 329,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  historyTiket: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default HistoryTiket;
