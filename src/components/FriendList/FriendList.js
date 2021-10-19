import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            <span className="status" data-is-online={friend.isOnline}></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
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
