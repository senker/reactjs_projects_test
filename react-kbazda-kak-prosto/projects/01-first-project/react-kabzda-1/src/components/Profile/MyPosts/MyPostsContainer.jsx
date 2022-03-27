import { connect } from "react-redux";
import {
  addPostCreator,
  onPostChangeCreator,
} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(onPostChangeCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
