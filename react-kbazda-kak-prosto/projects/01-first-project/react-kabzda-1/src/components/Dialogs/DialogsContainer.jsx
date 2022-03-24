import React from "react";
import {
  addMessageCreator,
  onMessageChangeCreator,
} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let onAddMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (text) => {
    let action = onMessageChangeCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={onAddMessage}
      updateNewMessageText={onMessageChange}
      dialogs={state.messagesPage.dialogs}
      messages={state.messagesPage.messages}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};

export default DialogsContainer;
