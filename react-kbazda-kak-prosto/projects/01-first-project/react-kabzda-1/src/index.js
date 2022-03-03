import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

let posts = [
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
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
