import Chat from "./components/chat"
import Detail from "./components/detail"
import List from "./components/list"
import Login from "./components/login";


const App = () => {

  const user = false;
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
        )
      }
      

    </div>

  )
}

export default App