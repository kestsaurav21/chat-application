import Chat from "./components/chat"
import Detail from "./components/detail"
import List from "./components/list"
import Login from "./components/login";
import Notification from "./components/notification";


const App = () => {

  const user = true;
  return (
    <div className='container'>
      { user ? (
          <>
            <List/>
            <Chat/>
            <Detail/>
          </>
        ) : (
          <Login/>
        )}
      <Notification/>

    </div>

  )
}

export default App