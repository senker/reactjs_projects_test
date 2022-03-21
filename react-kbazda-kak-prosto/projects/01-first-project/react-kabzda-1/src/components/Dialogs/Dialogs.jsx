import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import icon from "../../assets/icons/sendMessage.png";
import {
  addMessageCreator,
  onMessageChangeCreator,
} from "../../redux/reducers/dialogsReducer";

/* const SelectedLink = () => {
  return (navData) => (navData.isActive ? s.active : s.dialogsItem);
}; */

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageText;

  let onAddMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    const action = onMessageChangeCreator(text);
    props.store.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.textAreaZone}>
          <textarea
            onChange={onMessageChange}
            className={s.textArea}
            value={newMessageBody}
            placeholder="Enter your message"
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
