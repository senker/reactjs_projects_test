import s from "./FriendItem.module.css";



const FriendItem = (props) => {
  return (
    <div className={s.item}>
      <img src="https://media.nature.com/lw800/magazine-assets/d41586-019-00938-9/d41586-019-00938-9_16560868.jpg" />
      <div>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default FriendItem;
