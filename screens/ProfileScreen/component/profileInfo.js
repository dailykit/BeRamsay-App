import React, { useState } from "react";
import styles from "../styles/profileInfoStyle";
import { View, Image } from "react-native";
import { Text } from "@ui-kitten/components";
import DEFAULT_AVATAR from "../../../assets/no_avatar.png";

const ProfileInfo = props => {
    return (
        <View style={styles.container}>
            <View style={styles.profileLayout}>
                <View style={styles.imageLayout}>
                    <Image
                        source={props.data.imageSource}
                        defaultSource={DEFAULT_AVATAR}
                        style={styles.avatar} />
                </View>
                <View style={styles.nameLayout}>
                    <Text category='h4' style={styles.counterValue}>
                        {props.data.name}
                    </Text>
                    <Text category='c2' style={styles.counterText}>
                        {props.data.tag} | {props.data.designation}
                    </Text>
                </View>
                <View style={styles.editProfileLayout}>
                    <Text category='h4' style={styles.editProfileText}>
                        Edit Profile >
                    </Text>
                </View>
            </View>
            <View style={styles.counterRow}>
                <View style={styles.counterElement}>
                    <Text category='h5' style={styles.counterValue}>
                        {props.data.storyCount}
                    </Text>
                    <Text category='c2' style={styles.counterText}>
                        Stories
                    </Text>
                </View>
                <View style={styles.counterElement}>
                    <Text category='h5' style={styles.counterValue}>
                        {props.data.followerCount}
                    </Text>
                    <Text category='c2' style={styles.counterText}>
                        Followers
                </Text>
                </View>
                <View style={styles.counterElement}>
                    <Text category='h5' style={styles.counterValue}>
                        {props.data.couponCount}
                    </Text>
                    <Text category='c2' style={styles.counterText}>
                        Coupons
                </Text>
                </View>
            </View>
        </View>
    );
}

export default ProfileInfo;
