import Chat from "./components/chat"
import Detail from "./components/detail"
import List from "./components/list"


const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>

    </div>

  )
}

export default App