import Profile from "../Profile/Profile";
import userData from "../../userData.json";

export default function App() {
  return (
     <div>
    <Profile user={userData} />
    <div>hello</div>
    </div>
    );
}

