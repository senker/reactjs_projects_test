const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostCreator = () => ({ type: ADD_POST });
export const onPostChangeCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const onMessageChangeCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

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
