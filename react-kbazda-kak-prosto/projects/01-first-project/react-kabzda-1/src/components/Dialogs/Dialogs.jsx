import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

/* const SelectedLink = () => {
  return (navData) => (navData.isActive ? s.active : s.dialogsItem);
}; */

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Vladimir" id="1" />
        <DialogItem name="Andrei" id="2" />
        <DialogItem name="Svetlana" id="3" />
        <DialogItem name="Sanya" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yoyoyo" />
      </div>
    </div>
  );
};

export default Dialogs;
