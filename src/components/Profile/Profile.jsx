import s from './Profile.module.css';


const Profile = ({ userData: { username, tag, location, avatar, stats: {followers, views, likes} } }) => {
    return (
<div className={s.container}>
  <div className={s.wrapper}>
    <img
      src={avatar}
      alt="User avatar"
    />
    <p className={s.title}>{username}</p>
    <p className={s.text}>{tag}</p>
    <p className={s.text}>{location}</p>
  </div>

  <ul className={s.propertyList}>
    <li className={s.ProprtyListItem}>
      <span className={s.itemValue}>Followers</span>
      <span className={s.value}>{followers}</span>
    </li>
    <li className={s.ProprtyListItem}>
      <span className={s.itemValue}>Views</span>
      <span className={s.value}>{views}</span>
    </li>
    <li className={s.ProprtyListItem}>
      <span className={s.itemValue}>Likes</span>
      <span className={s.value}>{likes}</span>
    </li>
  </ul>
</div>);
};

export default Profile;