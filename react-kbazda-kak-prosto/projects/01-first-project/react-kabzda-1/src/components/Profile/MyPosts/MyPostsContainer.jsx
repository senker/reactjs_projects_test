import React from "react";
import {
  addPostCreator,
  onPostChangeCreator,
} from "../../../redux/reducers/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostCreator());
        };

        let onPostChange = (text) => {
          let action = onPostChangeCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
