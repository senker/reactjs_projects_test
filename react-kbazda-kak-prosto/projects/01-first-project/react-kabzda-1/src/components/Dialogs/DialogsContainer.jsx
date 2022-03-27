import React from "react";
import {
  addMessageCreator,
  onMessageChangeCreator,
} from "../../redux/reducers/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let onAddMessage = () => {
          store.dispatch(addMessageCreator());
        };

        let onMessageChange = (text) => {
          let action = onMessageChangeCreator(text);
          store.dispatch(action);
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
