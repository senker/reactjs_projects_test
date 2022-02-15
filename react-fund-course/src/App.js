import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
        const [posts, setPosts] = useState([
                {id: 1, title: 'Javascript', body: 'Description'},
                {id: 2, title: 'Javascript 2', body: 'Description'},
                {id: 3, title: 'Javascript 3', body: 'Description'},
        ])

  return (
    <div className="App">
        <form>
            <MyInput type="text" placeholder="Name of the post"/>
            <MyInput type="text" placeholder="Description of the post"/>
            <MyButton>Create a post</MyButton>
        </form>
        <PostList posts={posts} title="Posts about Javascript"/>
    </div>
  );
}

export default App;
