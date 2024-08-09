import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friendS }) {
  return (
    <ul>
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
