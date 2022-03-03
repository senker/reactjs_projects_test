import React from "react";
import s from "./ChatSuggestion.module.css";
import FriendItem from "./FriendItem/FriendItem";

const ChatSuggestion = (props) => {
  let nameElements = props.name.map((p) => <FriendItem name={p.name} />);

  return (
    <div>
      <div className={s.chatSuggestion}>Friends</div>
      <div className={s.friendStyling}>{nameElements}</div>
    </div>
  );
};

export default ChatSuggestion;
