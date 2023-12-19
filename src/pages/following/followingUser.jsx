import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userActionUnfollowUser } from "../../actions/userActions";

const FollowingUser = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const user = users.find((user) => user.id === parseInt(userId.userId));
  const handleUnfollow = (followingId) => {
    dispatch(
      userActionUnfollowUser({ userId: parseInt(userId.userId), followingId })
    );
  };

  return (
    <div>
      <ul>
        {user.followingIds.map((followingId) => (
          <li key={followingId}>
            {users.find((user) => user.id === followingId).name}
            <span>
              <button onClick={() => handleUnfollow(followingId)}>
                unfollow
              </button>
            </span>
          </li>
        ))}
      </ul>

      <Link to="/dashboard">back to Dashboard</Link>
    </div>
  );
};

export default FollowingUser;
