const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import LoginAs from "./screens/LoginAs";
import Tiket from "./screens/Tiket";
import Pesan from "./screens/Pesan";
import HistoryTiket from "./screens/HistoryTiket";
import HistoryPerjalanan from "./screens/HistoryPerjalanan";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginAs"
                component={LoginAs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tiket"
                component={Tiket}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pesan"
                component={Pesan}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HistoryTiket"
                component={HistoryTiket}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HistoryPerjalanan"
                component={HistoryPerjalanan}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
