import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi, how are you?",
          likesCount: 12,
        },
        {
          id: 2,
          message: "It's my first post",
          likesCount: 25,
        },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
    sidebarPage: {
      name: [
        { id: 1, name: "Vladimir" },
        { id: 2, name: "Lizan" },
        { id: 3, name: "Petea" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;

/*   _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  }, */
/* _addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  }, */
