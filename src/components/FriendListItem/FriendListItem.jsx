export default function FriendListItem({ mate: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
