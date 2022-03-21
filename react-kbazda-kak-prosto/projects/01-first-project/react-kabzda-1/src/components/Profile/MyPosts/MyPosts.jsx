import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { addPostCreator, onPostChangeCreator } from "../../../redux/reducers/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    let action = onPostChangeCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} placeholder="Add your new post" />
        </div>
        <button className={s.buttonStyling} onClick={onAddPost}>
          Add post
        </button>
        <button className={s.buttonStyling}>Remove</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
