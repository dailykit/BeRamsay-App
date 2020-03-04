import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Toggle } from "@ui-kitten/components";
import TopBar from "../../components/TopBar";
import { ThemeContext } from "../../contexts/theme-context";
import ProfileInfo from "./component/profileInfo";

const ProfileScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const themeContext = React.useContext(ThemeContext);
  const profileData = {
    name: "Danish Rafique",
    tag: "Budding Chef",
    designation: "Su Chef @Mojopizza",
    storyCount : 40,
    followerCount : 200,
    couponCount : 5,
    imageSource: require("../../assets/avatar.jpg")
  }

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    themeContext.toggleTheme();
  };
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ProfileInfo data={profileData} />
      <Toggle
        text={`Light/Dark Mode`}
        checked={checked}
        onChange={onCheckedChange}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ProfileScreen;
