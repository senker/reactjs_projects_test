let state = {
    profilePage:{
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
    },
    messagesPage:{
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
    },
    sidebar: {}
};

export default state;
