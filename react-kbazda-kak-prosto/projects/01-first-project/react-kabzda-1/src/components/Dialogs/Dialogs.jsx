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
  let dialogs = [
    { id: 1, name: "Vladimir" },
    { id: 2, name: "Andrei" },
    { id: 3, name: "Svetlana" },
    { id: 4, name: "Sanya" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ];

  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Good, thank you, and you?" },
    { id: 4, message: "Good, thank you" },
    { id: 5, message: "Bye" },
    { id: 6, message: "Bye bye" },
  ];
  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        {/* Old way of doing this, hard coded 
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
      </div>
      <div className={s.messages}>
        {messagesElements}
        {/* Old way of doing t his, hard coded way
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
