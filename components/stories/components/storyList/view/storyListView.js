import React, { Component } from "react";
import { View, FlatList } from "react-native";
// Components
import StoryListItem from "../../storyListItem/view/storyListItemView";
import styles from "./storyListStyles";

class StoryListView extends Component {
  state = {};

  // Component Life Cycles

  // Component Functions

  render() {
    const {
      stories,
      handleStoryItemPress,
      unPressedBorderColor,
      pressedBorderColor
    } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={stories}
          horizontal
          renderItem={({ item, index }) => (
            <StoryListItem
              handleStoryItemPress={() =>
                handleStoryItemPress && handleStoryItemPress(item, index)
              }
              unPressedBorderColor={unPressedBorderColor}
              pressedBorderColor={pressedBorderColor}
              item={item}
              {...this.props}
            />
          )}
        />
      </View>
    );
  }
}

export default StoryListView;
