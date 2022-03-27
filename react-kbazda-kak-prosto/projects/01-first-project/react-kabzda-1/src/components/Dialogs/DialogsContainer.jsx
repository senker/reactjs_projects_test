import { connect } from "react-redux";
import {
  addMessageCreator,
  onMessageChangeCreator,
} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(onMessageChangeCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
