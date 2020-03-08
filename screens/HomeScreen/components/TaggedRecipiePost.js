import React from "react";
import { Layout } from "@ui-kitten/components";

import TaggedRecipie from "./TaggedRecipie";
import TextPost from "./TextPost";
import PhotoPost from "./PhotoPost";
import VideoPost from "./VideoPost";
import MultiImagesPost from "./MultiImagesPost";
import PollPost from "./PollPost";

import { height, width } from "../../../constants/Layout";

const TaggedRecipiePost = props => {
  let {
    data: {
      data: { type }
    }
  } = props;
  return (
    <Layout>
      <TaggedRecipie />
      {type == "textPost" && <TextPost data={props.data} />}
      {type == "photoPost" && <PhotoPost data={props.data} />}
      {type == "videoPost" && <VideoPost data={props.data} />}
      {type == "pollPost" && <PollPost data={props.data} />}
      {type == "multiImagesPost" && <MultiImagesPost data={props.data} />}
    </Layout>
  );
};

export default TaggedRecipiePost;
