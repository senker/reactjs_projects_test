//constants
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Vladimir" },
    { id: 2, name: "Andrei" },
    { id: 3, name: "Svetlana" },
    { id: 4, name: "Sanya" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Good, thank you, and you?" },
    { id: 4, message: "Good, thank you" },
    { id: 5, message: "Bye" },
    { id: 6, message: "Bye bye" },
  ],
  newMessageText: "",
};

//reducer
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

//action creators
export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const onMessageChangeCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});
export default dialogsReducer;
