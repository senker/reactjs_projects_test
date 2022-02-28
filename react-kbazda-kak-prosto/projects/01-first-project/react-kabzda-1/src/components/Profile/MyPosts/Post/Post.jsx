import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://preview.redd.it/4lcra7ckvcn61.jpg?auto=webp&s=2d54f726d0a0d826901ebeba162ab42cd5fa97a1" />
      {props.message}
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
