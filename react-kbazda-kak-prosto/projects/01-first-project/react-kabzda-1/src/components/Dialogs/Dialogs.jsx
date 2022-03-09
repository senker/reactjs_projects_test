import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import icon from "../../assets/icons/sendMessage.png";

/* const SelectedLink = () => {
  return (navData) => (navData.isActive ? s.active : s.dialogsItem);
}; */

const Dialogs = (props) => {
  let dialogsElements = props.msgState.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.msgState.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.textAreaZone}>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            className={s.textArea}
            value={props.msgState.newMessageText}
          ></textarea>
          <button
            className={s.textAreaButton}
            title="Submit"
            onClick={onAddMessage}
          >
            <img src={icon} alt="paper plane icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;


/*   Old way of doing this, hard coded 
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */

  /* Old way of doing t his, hard coded way
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} /> */

