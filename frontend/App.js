import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Asset } from "expo-asset";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  ApplicationProvider,
  Layout,
  IconRegistry
} from "@ui-kitten/components";
import { mapping, light, dark } from "@eva-design/eva";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import store from "./store";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import ResturantView from "./screens/SearchScreen/ResturantView";
import RecipieView from "./screens/SearchScreen/RecipieView";
import AddPost from "./screens/HomeScreen/AddPost";

import fallBackComponent from "./components/FallbackComponent";
import ErrorBoundary from "./components/ErrorBoundary";

import { ThemeContext } from "./contexts/theme-context";
const themes = { light, dark };
import Colors from "./constants/Colors";

console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();
  const { getInitialState } = useLinking(containerRef);
  const [theme, setTheme] = React.useState("light");
  const currentTheme = themes[theme];

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const cacheImages = images => {
    return images.map(image => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        });
        const images = [
          require("./assets/temp_resturnt.jpg"),
          require("./assets/back.png"),
          require("./assets/calendar.png"),
          require("./assets/cart.png"),
          require("./assets/avatar.jpg"),
          require("./assets/comment.png"),
          require("./assets/no_avatar.png"),
          require("./assets/story.jpg"),
          require("./assets/filter.png"),
          require("./assets/share.png"),
          require("./assets/tasty.png"),
          require("./assets/salad.jpg")
        ];
        cacheImages(images);
        await Promise.all(cacheImages);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <ApplicationProvider mapping={mapping} theme={currentTheme}>
        <StatusBar
          translucent
          backgroundColor={
            theme == "light" ? Colors.backgroundLight : Colors.backgroundDark
          }
          barStyle={theme == "light" ? "dark-content" : "light-content"}
        />
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={store}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Suspense fallback={fallBackComponent}>
              <ErrorBoundary>
                <SafeAreaView
                  style={{
                    flex: 0,
                    backgroundColor:
                      theme == "light"
                        ? Colors.backgroundLight
                        : Colors.backgroundDark
                  }}
                ></SafeAreaView>
                <SafeAreaView style={styles.container}>
                  <NavigationContainer
                    ref={containerRef}
                    initialState={initialNavigationState}
                  >
                    <Stack.Navigator>
                      <Stack.Screen
                        name="BeRamsay"
                        component={BottomTabNavigator}
                      />
                      <Stack.Screen
                        name="ResturantView"
                        component={ResturantView}
                      />
                      <Stack.Screen
                        name="RecipieView"
                        component={RecipieView}
                      />
                      <Stack.Screen name="AddPost" component={AddPost} />
                    </Stack.Navigator>
                  </NavigationContainer>
                </SafeAreaView>
              </ErrorBoundary>
            </Suspense>
          </ThemeContext.Provider>
        </Provider>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? Constants.statusBarHeight : 0
  }
});
