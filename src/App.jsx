import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import './index.css';

function App() {
  
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App
