import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friendS }) {
  return (
    <ul className={css.container}>
      {friendS.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem mate={friend} />
          </li>
        );
      })}
    </ul>
  );
}
