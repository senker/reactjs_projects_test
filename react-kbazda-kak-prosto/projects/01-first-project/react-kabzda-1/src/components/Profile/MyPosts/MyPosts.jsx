import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" count="15 likes" />
        <Post message="It's my first post" count="25 likes" />
      </div>
    </div>
  );
};

export default MyPosts;
