import { useEffect } from "react";
import Chat from "./components/chat"
import Detail from "./components/detail"
import List from "./components/list"
import Login from "./components/login";
import Notification from "./components/notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";


const App = () => {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    }

  }, [fetchUserInfo]);
  
  if (isLoading) return <div className="loading">Loading ...</div>;
  return (
    <div className='container'>
      { currentUser ? (
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

export default App;