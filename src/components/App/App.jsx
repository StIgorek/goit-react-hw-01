import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../../userData.json";
import friends from "../../friends.json";

export default function App() {
  return (
    <div>
      <Profile user={userData} />
      <FriendList friendS={friends} />
    </div>
  );
}
