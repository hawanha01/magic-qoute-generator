// FollowingUser.jsx

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userActionUnfollowUser } from "../../actions/userActions";
import "./FollowingUser.css";

const FollowingUser = () => {
  const userId = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));

  const handleUnfollow = (followingId) => {
    dispatch(
      userActionUnfollowUser({ userId: parseInt(userId.userId), followingId })
    );
  };

  return (
    <div className="following-user-container">
      <ul className="user-list">
        {user.followingIds.map((followingId) => (
          <li key={followingId} className="user-list-item">
            <span className="user-name">
              {users.find((user) => user.id === followingId).name}
            </span>
            <button
              className="unfollow-button"
              onClick={() => handleUnfollow(followingId)}
            >
              Unfollow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingUser;
