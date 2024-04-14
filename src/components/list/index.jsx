import ChatList from "./chatList";
import "./list.css";
import Userinfo from "./userInfo";

const List = () => {
  return (
    <div className="list">
    <Userinfo/>
    <ChatList/>
    </div>
  )
}


export default List;