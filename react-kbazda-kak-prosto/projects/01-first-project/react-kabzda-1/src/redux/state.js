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
      newPostText: "it-kamasutra.com",
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
      newMessageText: "Dobriy deni",
    },
    sidebarPage: {
      name: [
        { id: 1, name: "Vladimir" },
        { id: 2, name: "Lizan" },
        { id: 3, name: "Petea" },
      ],
    },
  },
  getState() {
    debugger;
    return this._state;
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
export default store;
