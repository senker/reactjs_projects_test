import React from "react";
import {
  addPostCreator,
  onPostChangeCreator,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let onAddPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (text) => {
    let action = onPostChangeCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
