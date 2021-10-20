import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => {
        return (
          <li className={s.item} key={friend.id}>
            <span className={s.status} data-is-online={friend.isOnline}></span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    }),
  ),
};
