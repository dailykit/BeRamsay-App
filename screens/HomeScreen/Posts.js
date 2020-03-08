import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Layout } from "@ui-kitten/components";
import { height, width } from "../../constants/Layout";

import Text from "../../components/TextComponent";
import TextPost from "./components/TextPost";
import PhotoPost from "./components/PhotoPost";
import VideoPost from "./components/VideoPost";
import MultiImagesPost from "./components/MultiImagesPost";

const posts = [
  {
    name: "Sunny Dhama",
    time: "2h ago",
    avatar: require("../../assets/avatar.jpg"),
    type: "textPost",
    data: {
      text:
        "I love how this group is a little community now. We can tell who is posting based just on the plates! It is a friendly little group and I like the positivity and help we show each other.Maybe I’m just feeling sentimental at the holidays, but I am always excited to post my meals here and see what you all post.Happy holidays, BR buddies!"
    }
  },
  {
    name: "Sunny Dhama",
    time: "2h ago",
    avatar: require("../../assets/avatar.jpg"),
    type: "photoPost",
    data: {
      src: require("../../assets/story.jpg"),
      desc: "Looking Tasty!"
    }
  },
  {
    name: "Sunny Dhama",
    time: "2h ago",
    avatar: require("../../assets/avatar.jpg"),
    type: "videoPost",
    data: {
      src: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      desc: "This dish looks good!"
    }
  },
  {
    name: "Sunny Dhama",
    time: "2h ago",
    avatar: require("../../assets/avatar.jpg"),
    type: "multiImagesPost",
    data: {
      images: [
        require("../../assets/story.jpg"),
        require("../../assets/story.jpg"),
        require("../../assets/story.jpg")
      ],
      desc: "This dish looks good!"
    }
  },
  {
    name: "Sunny Dhama",
    time: "2h ago",
    avatar: require("../../assets/avatar.jpg")
  }
];

const Posts = props => {
  return (
    <Layout style={styles.container}>
      {posts.map((post, _id) => {
        if (post.type) {
          return (
            <Layout style={styles.postContainer} key={_id}>
              <Layout style={styles.postTopBar}>
                <Layout style={styles.postTopBarLeft}>
                  <Layout style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={post.avatar} />
                  </Layout>
                  <Text>{post.name}</Text>
                </Layout>
                <Layout style={styles.postTopBarRight}>
                  <Text>{post.time}</Text>
                </Layout>
              </Layout>
              {post.type == "textPost" && <TextPost data={post} />}
              {post.type == "photoPost" && <PhotoPost data={post} />}
              {post.type == "videoPost" && <VideoPost data={post} />}
              {post.type == "multiImagesPost" && (
                <MultiImagesPost data={post} />
              )}
              <Layout style={styles.bottomBar}>
                <Layout style={styles.postBottomBarLeft}>
                  <Layout style={styles.avatarContainer}>
                    <Image
                      style={styles.icons}
                      source={require("../../assets/tasty.png")}
                    />
                  </Layout>
                  <Layout style={styles.avatarContainer}>
                    <Image
                      style={styles.icons}
                      source={require("../../assets/comment.png")}
                    />
                  </Layout>
                </Layout>
                <Layout style={styles.postBottomBarRight}>
                  <Layout style={styles.avatarContainer}>
                    <Image
                      style={styles.icons}
                      source={require("../../assets/share.png")}
                    />
                  </Layout>
                </Layout>
              </Layout>
            </Layout>
          );
        }
      })}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    paddingHorizontal: 20
  },
  avatar: {
    height: null,
    width: null,
    flex: 1,
    borderRadius: 50
  },
  postTopBar: {
    height: 50,
    flexDirection: "row"
  },
  bottomBar: {
    height: 50,
    flexDirection: "row",
    marginTop: 10
  },
  avatarContainer: {
    height: 40,
    width: 40
  },
  icons: {
    height: 25,
    width: 25,
    resizeMode: "contain"
  },
  postTopBarLeft: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  postBottomBarLeft: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  postContainer: {
    marginBottom: 10,
    borderBottomColor: "#EDEDED",
    borderBottomWidth: 2
  },
  postBottomBarRight: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default Posts;
