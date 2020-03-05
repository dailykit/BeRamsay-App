import React from "react";
import { ScrollView } from "react-native";
import { Layout, Toggle, Input } from "@ui-kitten/components";
import TopBar from "../../components/TopBar";
import { ThemeContext } from "../../contexts/theme-context";
import ProfileInfo from "./component/profileInfo";
import styles from "./profileStyle";


const useInputChanges = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {
    value,
    onChangeText: setValue,
  };
};

const ProfileScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const themeContext = React.useContext(ThemeContext);
  const largeInputChanges = useInputChanges();

  const profileData = {
    name: "Danish Rafique",
    tag: "Budding Chef",
    designation: "Su Chef @Mojopizza",
    storyCount: 40,
    followerCount: 200,
    couponCount: 5,
    imageSource: require("../../assets/avatar.jpg")
  }

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    themeContext.toggleTheme();
  };
  return (
    <Layout style={styles.container}>
      <TopBar />
      <ScrollView style={styles.container}>
        <ProfileInfo data={profileData} />
        <Input
          style={styles.input}
          size='large'
          placeholder="What's Cooking Today? add a post to your Dailykit's journey.."
          multiline={true}
          numberOfLines={4}
          {...largeInputChanges}
        />
        <Toggle
          text={`Light/Dark Mode`}
          checked={checked}
          onChange={onCheckedChange}
        />
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;
