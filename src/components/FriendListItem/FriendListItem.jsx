import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ mate: { avatar, name, isOnline } }) {
  return (
    <div className={css.item}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
