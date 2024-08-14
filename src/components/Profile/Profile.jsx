import css from "../Profile/Profile.module.css";

export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.username}>{username}</p>
        <p className={css.userdata}>@{tag}</p>
        <p className={css.userdata}>{location}</p>
      </div>

      <ul className={css.box}>
        <li className={css.stats}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
