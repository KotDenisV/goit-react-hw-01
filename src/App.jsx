import Profile from "./components/Profile/Profile";
import userData from './userData.json';
import friends from './friends.json';
import './index.css';
import FriendList from "./components/FriendList/FriendList";

function App() {
  
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App
